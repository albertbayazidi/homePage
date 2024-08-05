#%%
import svgwrite
from IPython.display import SVG, display

# Create an SVG drawing with a viewBox that zooms in on the content
dwg = svgwrite.Drawing('example.svg', profile='tiny', viewBox=('0 0 150 100'))

x = 100 + 30 
y = 33
pyOnly = 30

# Define a path
startPath = f"""M {x},{y} A 1 1 0 1 1 {x} {2*y} C {x*1.1} {y*1.4} {x} {y} {x} {y} """

x = x/2 
y = 33

middlePath = f"""M {x},{y} A 1 1 0 1 1 {x} {3*y} C {x*1.2} {y*1.8} {x} {y} {x} {y} """

x = 0 
y = 33

endPath = f"""M {x},{y} A 1 1 0 1 1 {x} {4*y} C {12} {2.5*y} {x} {y} {x} {y} """

# Add the path to the drawing
dwg.add(dwg.path(d=startPath, stroke="black", fill="none"))
dwg.add(dwg.path(d=middlePath, stroke="black", fill="none"))
dwg.add(dwg.path(d=endPath, stroke="black", fill="none"))
# Save the SVG file
dwg.save()

# Display the SVG
display(SVG(dwg.tostring()))



# %%
