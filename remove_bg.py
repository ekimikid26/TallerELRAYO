from PIL import Image
import sys

def make_transparent(input_path, output_path):
    img = Image.open(input_path).convert("RGBA")
    datas = img.getdata()

    newData = []
    # Definimos el color verde brillante (R=0, G=255, B=0)
    # Usamos un pequeño margen (threshold) por si la compresión JPEG/PNG varió el verde
    threshold = 50
    for item in datas:
        if item[1] > 200 and item[0] < threshold and item[2] < threshold:
            # Reemplazar por transparente (0,0,0,0)
            newData.append((0, 0, 0, 0))
        else:
            newData.append(item)

    img.putdata(newData)
    img.save(output_path, "PNG")
    print(f"Hecho: {output_path}")

if __name__ == "__main__":
    if len(sys.argv) < 3:
        print("Uso: python script.py input.png output.png")
    else:
        make_transparent(sys.argv[1], sys.argv[2])
