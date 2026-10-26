import pathlib
root = pathlib.Path(__file__).parent
app = (root/'src/app.html').read_text()
content = (root/'src/content.js').read_text()
body = app.replace('%%CONTENT%%', content).replace('%%WIDGETS%%', (root/'src/widgets.js').read_text()).replace('%%ASK%%', (root/'src/ask.js').read_text())
(root/'dist').mkdir(exist_ok=True)
(root/'dist/artifact.html').write_text(body)
head = '''<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="description" content="Offline self-study for Baby-friendly Hospital Initiative (Hospital Rakan Bayi) assessment.">
<meta name="theme-color" content="#EEF2EF" media="(prefers-color-scheme: light)">
<meta name="theme-color" content="#0B1312" media="(prefers-color-scheme: dark)">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="default">
<meta name="apple-mobile-web-app-title" content="BFHI Learn">
<link rel="manifest" href="manifest.webmanifest">
<link rel="apple-touch-icon" href="icons/icon-180.png">
<link rel="icon" type="image/png" href="icons/icon-192.png">
<style>:root{padding-top:env(safe-area-inset-top,0px);color-scheme:light}img{max-width:100%}[hidden]{display:none!important}</style>
</head>
<body>
'''
(root/'index.html').write_text(head + body + '\n</body>\n</html>\n')
print('built', len(body))

# service worker asset list (auto) — bump VERSION in src/version.txt to push updates
version = (root/'src/version.txt').read_text().strip()
assets = ['./', './index.html', './manifest.webmanifest', './ai-config.json'] + sorted('./' + str(f.relative_to(root)) for d in ('icons', 'img') for f in (root/d).iterdir() if f.is_file())
sw = (root/'src/sw.template.js').read_text().replace('%%VERSION%%', version).replace('%%ASSETS%%', ',\n  '.join(repr(a) for a in assets))
(root/'sw.js').write_text(sw)
print('sw', version, len(assets), 'assets')
