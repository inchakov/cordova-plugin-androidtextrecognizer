

export class TextRecognizer {

    public static detect(options: ImagePathOptions | ImageDataOptions) {

        let method: string;
        let args: any[];

        if ((<ImagePathOptions>options).path) {
            method = "detectFromPath"
            args = [(<ImagePathOptions>options).path];
        }

        if ((<ImageDataOptions>options).data) {
            method = "detectFromData"
            args = [(<ImageDataOptions>options).data];
        }

        if (!method)
            throw new Error('Expected "path" or "data" option.');
            
        cordova.exec(options.success, options.error, "TextRecognizer", method, args);
    }
}
