
type ImageDataArray = Uint8ClampedArray | number[];

interface ColorVector {
  r: number,
  g: number,
  b: number
}

export const hexToRgbTriplet = (hex: string): string => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `${r}, ${g}, ${b}`;
};

export const getTopColors = (data: ImageDataArray, k: number): string[] => {
  const imageData = convertToVector(data);
  const maxIterations = 10;

  let centroids: ColorVector[] = [];
  for (let i = 0; i < k; i++) {
    centroids.push({ ...imageData[Math.floor(Math.random() * imageData.length)] });
  }

  const clusterSizes = new Array(k).fill(0);

  let iterations = 0;
  while (iterations < maxIterations) {
    const clusters: ColorVector[][] = new Array(k).fill(null).map(() => []);
    for (const pixel of imageData) {
      let minDist = Infinity, closest = 0;
      for (let i = 0; i < k; i++) {
        const d = euclideanDistance(pixel, centroids[i]);
        if (d < minDist) { minDist = d; closest = i; }
      }
      clusters[closest].push(pixel);
    }
    for (let i = 0; i < k; i++) {
      clusterSizes[i] = clusters[i].length;
      if (clusters[i].length > 0) {
        const sum = clusters[i].reduce(
          (acc, c) => { acc.r += c.r; acc.g += c.g; acc.b += c.b; return acc; },
          { r: 0, g: 0, b: 0 }
        );
        centroids[i] = { r: sum.r / clusters[i].length, g: sum.g / clusters[i].length, b: sum.b / clusters[i].length };
      }
    }
    iterations++;
  }

  return centroids
    .map((c, i) => ({ hex: rgbToHex(c.r, c.g, c.b), size: clusterSizes[i] }))
    .sort((a, b) => b.size - a.size)
    .map(x => x.hex);
};

export const getPrimaryColor = (data: ImageDataArray): string => {

  const imageData: ColorVector[] = convertToVector(data);

  const k = 3;
  const maxIterations = 10;

  const prominentColor = kMeans(imageData, k, maxIterations);

  return prominentColor;

}

const convertToVector = (data: ImageDataArray): ColorVector[] => {

  let colorVectorArr: ColorVector[] = [];
  for (let i: number = 0; i < data.length; i += 4) {
    
    // Disregard the alpha value
    colorVectorArr.push(
      { 
        r: data[i], 
        g: data[i + 1], 
        b: data[i + 2] 
      }
    );
  }

  return colorVectorArr;

}

const rgbToHex = (r: number, g: number, b: number): string => {
  return "#" + ((1 << 24) + (Math.floor(r) << 16) + (Math.floor(g) << 8) + Math.floor(b)).toString(16).slice(1);
};

const euclideanDistance = (color1: ColorVector, color2: ColorVector): number => {
  const dr = color1.r - color2.r;
  const dg = color1.g - color2.g;
  const db = color1.b - color2.b;
  return Math.sqrt(dr * dr + dg * dg + db * db);
}

const kMeans = (imageData: ColorVector[], k: number, maxIterations: number): string => {
  // Step 3: Initialize centroids with K distinct color vectors
  let centroids: ColorVector[] = [];

  for (let i = 0; i < k; i++) {
    // Math.random() cannot be seeded, so this function has to only be called once per song
    let randomIndex = Math.floor(Math.random() * imageData.length);

    centroids.push(imageData[randomIndex]);
  }

  let iterations = 0;
  while (iterations < maxIterations) {
    // Step 4: Assign pixels to clusters
    const clusters: ColorVector[][] = new Array(k).fill(null).map(() => []);
    for (const pixel of imageData) {
      let minDistance = Infinity;
      let closestCentroidIdx = -1;
      // Find the nearest centroid for the current pixel
      for (let i = 0; i < k; i++) {
        const distance = euclideanDistance(pixel, centroids[i]);
        if (distance < minDistance) {
          minDistance = distance;
          closestCentroidIdx = i;
        }
      }
      clusters[closestCentroidIdx].push(pixel);
    }
    // Step 5: Update centroids
    for (let i = 0; i < k; i++) {
      if (clusters[i].length > 0) {
        const sumVector: ColorVector = clusters[i].reduce(
          (acc, color) => {
            acc.r += color.r;
            acc.g += color.g;
            acc.b += color.b;
            return acc;
          },
          { r: 0, g: 0, b: 0 }
        );
        centroids[i].r = sumVector.r / clusters[i].length;
        centroids[i].g = sumVector.g / clusters[i].length;
        centroids[i].b = sumVector.b / clusters[i].length;
      }
    }
    iterations++;
  }
  // Step 7: Determine prominent color (centroid with the most assigned pixels)
  const prominentColor = centroids.reduce((prev, curr) =>
    prev > curr ? prev : curr
  );
  return rgbToHex(prominentColor.r, prominentColor.g, prominentColor.b);
}