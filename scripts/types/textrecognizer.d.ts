
/**
 * Finds and recognizes text from image specefied in options
  */
interface TextRecognizer {
    /**
     * Detects and recognizes text in a image
     * @param options Image recognizing options
     */
    detect(options: ImagePathOptions | ImageDataOptions );
}

/**
 * Detecting callback functions
 */
interface DetectCallback {
    /**
     * This method will be called when detecting is finished successfully.
     * @param blocks A result of detecting if any
     */
    success(blocks?: TextBlock[]);

    /**
     * This method will be called when detecting is failed.
     * @param error Error details
     */
    error(error: string);
}

/**
 * Options of detecting a image from specified path.
 */
interface ImagePathOptions extends DetectCallback {
    /**
     * Image path 
     */
    path: string;
}

/**
 * Options of detecting a image from specified data.
 */
interface ImageDataOptions extends DetectCallback {
    /**
     * Image data
     */
    data: string;
}

/**
 * A block of text (think of it as a paragraph) as deemed by the OCR engine.
 */
interface TextBlock {
    /**
     * Returns the TextBlock's axis-aligned bounding box.
     */
    bounds: Rect;

    /**
     * 4 corner points in clockwise direction starting with top-left.
     */
    cornerPoints: Point[];

    /**
     * Returns detected text lines if any.
     */
    lines: string[];

    /**
     * Prevailing language in the TextBlock.
     */
    language: string;
}

/**
 * Rect holds four integer coordinates for a rectangle.
 */
interface Rect {
    bottom, left, right, top: number;
}

/**
 * Point holds two integer coordinates
 */
interface Point {
    x, y: number;
}