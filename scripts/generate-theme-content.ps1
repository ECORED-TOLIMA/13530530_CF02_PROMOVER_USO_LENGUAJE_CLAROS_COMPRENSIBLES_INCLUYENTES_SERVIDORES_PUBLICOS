param(
  [string]$Source = 'fuentes/13530530_CF02_DI.docx'
)

$ErrorActionPreference = 'Stop'
Add-Type -AssemblyName System.IO.Compression.FileSystem

function Get-WordItems {
  param([string]$DocumentPath)

  $archive = [System.IO.Compression.ZipFile]::OpenRead(
    (Resolve-Path -LiteralPath $DocumentPath)
  )

  try {
    $entry = $archive.GetEntry('word/document.xml')
    $reader = [System.IO.StreamReader]::new(
      $entry.Open(),
      [System.Text.Encoding]::UTF8
    )

    try {
      [xml]$document = $reader.ReadToEnd()
    } finally {
      $reader.Dispose()
    }

    $namespaces = [System.Xml.XmlNamespaceManager]::new($document.NameTable)
    $namespaces.AddNamespace(
      'w',
      'http://schemas.openxmlformats.org/wordprocessingml/2006/main'
    )

    $items = [System.Collections.Generic.List[object]]::new()
    $nodes = $document.SelectNodes(
      '//w:body/*[self::w:p or self::w:tbl]',
      $namespaces
    )

    foreach ($node in $nodes) {
      if ($node.LocalName -eq 'p') {
        $text = (($node.SelectNodes('.//w:t', $namespaces) | ForEach-Object {
              $_.InnerText
            }) -join '').Trim()

        if ($text.Length % 2 -eq 0) {
          $halfLength = [int]($text.Length / 2)
          if ($text.Substring(0, $halfLength) -eq $text.Substring($halfLength)) {
            $text = $text.Substring(0, $halfLength)
          }
        }

        if ($text) {
          $items.Add([pscustomobject]@{
              Type = 'paragraph'
              Text = $text
            })
        }
      } else {
        $rows = [System.Collections.Generic.List[object]]::new()

        foreach ($row in $node.SelectNodes('./w:tr', $namespaces)) {
          $cells = [System.Collections.Generic.List[string]]::new()

          foreach ($cell in $row.SelectNodes('./w:tc', $namespaces)) {
            $cellText = (($cell.SelectNodes('.//w:t', $namespaces) |
                ForEach-Object { $_.InnerText }) -join '').Trim()
            $cells.Add($cellText)
          }

          $rows.Add($cells.ToArray())
        }

        $items.Add([pscustomobject]@{
            Type = 'table'
            Rows = $rows.ToArray()
          })
      }
    }

    return $items.ToArray()
  } finally {
    $archive.Dispose()
  }
}

function Find-ItemIndex {
  param(
    [object[]]$Items,
    [string]$Text,
    [int]$StartAt = 0
  )

  for ($index = $StartAt; $index -lt $Items.Count; $index++) {
    if (
      $Items[$index].Type -eq 'paragraph' -and
      $Items[$index].Text -eq $Text
    ) {
      return $index
    }
  }

  throw "No se encontró el marcador '$Text'."
}

function Add-BlockText {
  param(
    [System.Collections.Generic.List[string]]$Lines,
    [string]$Element,
    [string]$Text,
    [int]$Indent = 4
  )

  $spaces = ' ' * $Indent
  $Lines.Add("$spaces$Element.")
  $Lines.Add("$spaces  $Text")
}

function Add-Table {
  param(
    [System.Collections.Generic.List[string]]$Lines,
    [object[]]$Rows
  )

  if (-not $Rows.Count) {
    return
  }

  $Lines.Add('    .tabla-a.color-acento-contenido.mb-4')
  $Lines.Add('      table')
  $Lines.Add('        thead')
  $Lines.Add('          tr')

  foreach ($cell in $Rows[0]) {
    Add-BlockText -Lines $Lines -Element 'th' -Text $cell -Indent 12
  }

  if ($Rows.Count -gt 1) {
    $Lines.Add('        tbody')

    foreach ($row in $Rows[1..($Rows.Count - 1)]) {
      $Lines.Add('          tr')
      foreach ($cell in $row) {
        Add-BlockText -Lines $Lines -Element 'td' -Text $cell -Indent 12
      }
    }
  }
}

function Test-InternalTitle {
  param([string]$Text)

  $knownTitles = @(
    'Plural', 'Dinámica', 'Relacional', 'Contextual', 'Incluyente',
    'Comunicativa', 'Antes', 'Durante', 'Después', 'Enfoque de derechos',
    'Enfoque diferencial', 'Enfoque territorial', 'Enfoque intercultural',
    'Enfoque inclusivo', 'Comunidades étnicas',
    'Diversidad de género y sexual', 'Niñas, niños y adolescentes',
    'Personas mayores', 'Personas con discapacidad', 'Población migrante',
    'Víctimas del conflicto armado', 'Reconocimiento', 'Pertinencia',
    'Accesibilidad', 'Explicita', 'Implícita', 'Repetitiva', 'Excluyente',
    'Discapacitados', 'Abuelitos', 'Ilegales', 'Personas normales',
    'Victimas como etiqueta única', 'Pobrecitos', 'Sordomudos',
    'Dignidad humana', 'Igualdad y no discriminación', 'Participación',
    'Ley 1346 de 2009', 'Ley 1482 de 2011', 'Ley 1618 de 2013',
    'Ley 1712 de 2014', 'Ley 1755 de 2015',
    'Lineamientos institucionales del SENA – Guía de lenguajes claros, comprensibles e incluyentes (versión 2)',
    '1991 – Constitución Política de Colombia', '2009 – Ley 1346 de 2009',
    '2011 – Ley 1482 de 2011', '2013 – Ley 1618 de 2013',
    '2014 – Ley 1712 de 2014', '2015 – Ley 1755 de 2015',
    'Actualidad – Lineamientos institucionales', 'Claro', 'Medible',
    'Pertinente', 'Útil', 'Comparable', 'Realista',
    'Revisar los mensajes antes de publicarlos',
    'Capacitar a los equipos de atención y comunicación',
    'Diseñar formatos accesibles desde el inicio',
    'Probar los mensajes con diferentes perfiles de ciudadanía',
    'Reescribir documentos con lenguaje claro',
    'Retirar y ajustar piezas comunicativas con errores',
    'Corregir formatos o recursos que no sean accesibles',
    'Revisar las causas que originaron la dificultad',
    'Construir modelos de respuesta en lenguaje claro',
    'Actualizar los protocolos de atención ciudadana',
    'Mejorar la accesibilidad de los documentos digitales',
    'Revisar periódicamente los indicadores de comunicación'
  )

  return $knownTitles -contains $Text
}

$items = Get-WordItems -DocumentPath $Source
$contentStart = Find-ItemIndex -Items $items -Text 'C. DESARROLLO DE CONTENIDOS'

$themeDefinitions = @(
  [pscustomobject]@{
    Number = 1
    MainMarker = 'Diversidad'
    Title = 'Diversidad'
    Subtopics = [ordered]@{
      '1.1 Concepto' = 't_1_1'
      '1.2 Características' = 't_1_2'
      '1.3 Tipos' = 't_1_3'
      '1.4 Enfoques' = 't_1_4'
      '1.5 Diversidad del país' = 't_1_5'
    }
  },
  [pscustomobject]@{
    Number = 2
    MainMarker = 'Enfoque diferencial'
    Title = 'Enfoque diferencial'
    Subtopics = [ordered]@{
      '2.1 Concepto' = 't_2_1'
      '2.2 Características' = 't_2_2'
    }
  },
  [pscustomobject]@{
    Number = 3
    MainMarker = 'Discriminación'
    Title = 'Discriminación'
    Subtopics = [ordered]@{
      '3.1 Concepto' = 't_3_1'
      '3.2 Tipos' = 't_3_2'
      '3.3 Características' = 't_3_3'
      '3.4 Uso del lenguaje discriminatorio' = 't_3_4'
    }
  },
  [pscustomobject]@{
    Number = 4
    MainMarker = '4. Inclusión'
    Title = 'Inclusión'
    Subtopics = [ordered]@{
      '4.1 Concepto' = 't_4_1'
      '4.2 Tipos' = 't_4_2'
      '4.3 Principios' = 't_4_3'
      '4.4 normatividad vigente' = 't_4_4'
    }
  },
  [pscustomobject]@{
    Number = 5
    MainMarker = '5. Indicadores'
    Title = 'Indicadores'
    Subtopics = [ordered]@{
      '5.1 Concepto' = 't_5_1'
      '5.2 Características' = 't_5_2'
      '5.3 Formulación y medición' = 't_5_3'
    }
  },
  [pscustomobject]@{
    Number = 6
    MainMarker = '6. Plan de mejoramiento en el uso lenguajes claros, comprensibles e inclusivos'
    Title = 'Plan de mejoramiento en el uso lenguajes claros, comprensibles e inclusivos'
    Subtopics = [ordered]@{
      '6.1 Acciones preventivas' = 't_6_1'
      '6.2 Acciones correctivas' = 't_6_2'
      '6.3 Acciones de mejora' = 't_6_3'
    }
  }
)

$cursor = $contentStart + 1
foreach ($theme in $themeDefinitions) {
  if ($theme.Number -eq 2) {
    $cursor = (
      Find-ItemIndex -Items $items -Text '1.5 Diversidad del país' -StartAt $cursor
    ) + 1
  }

  $theme | Add-Member -NotePropertyName Start -NotePropertyValue (
    Find-ItemIndex -Items $items -Text $theme.MainMarker -StartAt $cursor
  )
  $cursor = $theme.Start + 1
}

$synthesisIndex = Find-ItemIndex -Items $items -Text 'SÍNTESIS' -StartAt $cursor

for ($themeIndex = 0; $themeIndex -lt $themeDefinitions.Count; $themeIndex++) {
  $theme = $themeDefinitions[$themeIndex]
  $end = if ($themeIndex -lt $themeDefinitions.Count - 1) {
    $themeDefinitions[$themeIndex + 1].Start - 1
  } else {
    $synthesisIndex - 1
  }

  $lines = [System.Collections.Generic.List[string]]::new()
  $lines.Add('<template lang="pug">')
  $lines.Add('.curso-main-container.pb-3')
  $lines.Add('  BannerInterno')
  $lines.Add('  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5')
  $lines.Add('    .titulo-principal.color-acento-contenido')
  $lines.Add('      .titulo-principal__numero')
  $lines.Add("        span $($theme.Number)")
  Add-BlockText -Lines $lines -Element 'h1' -Text $theme.Title -Indent 6

  $pendingTableTitle = $null
  for ($itemIndex = $theme.Start + 1; $itemIndex -le $end; $itemIndex++) {
    $item = $items[$itemIndex]

    if ($item.Type -eq 'table') {
      if ($pendingTableTitle) {
        $match = [regex]::Match($pendingTableTitle, '^Tabla (\d+)\.\s*(.+)$')
        $lines.Add('    .titulo-sexto.color-acento-contenido.mb-3.mt-4')
        Add-BlockText -Lines $lines -Element 'h5' -Text "Tabla $($match.Groups[1].Value)." -Indent 6
        Add-BlockText -Lines $lines -Element 'span' -Text $match.Groups[2].Value -Indent 6
        $pendingTableTitle = $null
      }

      Add-Table -Lines $lines -Rows $item.Rows
      continue
    }

    $text = $item.Text
    if ($theme.Subtopics.Contains($text)) {
      $anchor = $theme.Subtopics[$text]
      $lines.Add('')
      $lines.Add('    Separador')
      $lines.Add("    #$anchor.titulo-segundo.color-acento-contenido(data-aos=`"fade-left`")")
      Add-BlockText -Lines $lines -Element 'h2' -Text $text -Indent 6
      continue
    }

    if ($text -match '^Tabla \d+\.') {
      $pendingTableTitle = $text
      continue
    }

    if ($text -match '^Figura (\d+)\.\s*(.+)$') {
      $lines.Add('    .titulo-sexto.color-acento-contenido.mb-3.mt-4')
      Add-BlockText -Lines $lines -Element 'h5' -Text "Figura $($Matches[1])." -Indent 6
      Add-BlockText -Lines $lines -Element 'span' -Text $Matches[2] -Indent 6
      continue
    }

    if ($text -match '^\d+_CF\d+_Guion_') {
      continue
    }

    if (Test-InternalTitle -Text $text) {
      Add-BlockText -Lines $lines -Element 'h5.mt-4' -Text $text -Indent 4
    } else {
      Add-BlockText -Lines $lines -Element 'p.mb-4' -Text $text -Indent 4
    }
  }

  $lines.Add('</template>')
  $lines.Add('')
  $lines.Add('<script>')
  $lines.Add('export default {')
  $lines.Add("  name: 'Tema$($theme.Number)',")
  $lines.Add('  data: () => ({}),')
  $lines.Add('}')
  $lines.Add('</script>')

  $target = Join-Path (Get-Location) "src/views/Tema$($theme.Number).vue"
  [System.IO.File]::WriteAllText(
    $target,
    ($lines -join [Environment]::NewLine) + [Environment]::NewLine,
    [System.Text.UTF8Encoding]::new($false)
  )
}

