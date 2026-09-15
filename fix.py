import codecs
import re
content = codecs.open('src/data/rooms.ts', 'r', encoding='utf-8').read()
content = re.sub(r'\"src\": \"images/ga-moc/netflix-new.png\",\s*\"label\": \"[^\"]+\"', '\"src\": \"images/ga-moc/netflix-new.png\",\n        \"label\": \"NETFLIX & MÁY CHIẾU HD\"', content)
codecs.open('src/data/rooms.ts', 'w', encoding='utf-8').write(content)
