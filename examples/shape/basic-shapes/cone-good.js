function setup() {
  createCanvas(600, 500);
  background(255);
  noStroke();

  const ellipseX = width / 2;
  const ellipseY = height * 0.3;
  const ellipseSize = width * 0.32;
  const triangleY = height * 0.36;
  const spacing = width * 0.01;

  fill(40);
  ellipse(ellipseX, ellipseY, ellipseSize, ellipseSize);

  fill(255);
  rect(0, triangleY - spacing, width, height);

  fill(40);
  triangle(ellipseX - (ellipseSize/2) - spacing, triangleY, ellipseX + (ellipseSize/2) + spacing, triangleY, ellipseX, height * 0.9);

  noLoop();
}
