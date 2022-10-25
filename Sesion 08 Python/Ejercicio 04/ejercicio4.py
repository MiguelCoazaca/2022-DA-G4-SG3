import re

phrase = 'La transformación digital es la integración de tecnología digital en todas las áreas de una empresa, y el futuro Ingeniero de Sistemas no es ajeno a ello, ya que va a formar parte del cambio fundamentalmente en la forma en que opera una empresa y brinda valor a los clientes.¡Conéctate al mundo de la tecnología ahora, y experimenta la revolución de la información y el poder de usarla!'

print (re.findall('digital',phrase,flags = re.IGNORECASE))
print(re.sub('digital','empresa',phrase,flags = re.IGNORECASE))