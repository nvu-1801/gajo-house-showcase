import codecs
import re

content = codecs.open('src/data/rooms.ts', 'r', encoding='utf-8').read()

# The target is the second item in ga-moc gallerySub which currently has src IMG_5915.jpg or whatever
# Let's just find the gallerySub array in ga-moc and replace the IMG_5915.jpg block

content = re.sub(
    r'(\{\s*\"src\":\s*\"images/ga-moc/IMG_5915.jpg\",\s*\"label\":\s*\")[^\"]+(\"\s*\})',
    r'{\n          "src": "images/ga-moc/netflix-new-2.jpg",\n          "label": "NETFLIX & MÁY CHIẾU HD"\n        }',
    content
)

codecs.open('src/data/rooms.ts', 'w', encoding='utf-8').write(content)
print('Fixed rooms.ts again')
