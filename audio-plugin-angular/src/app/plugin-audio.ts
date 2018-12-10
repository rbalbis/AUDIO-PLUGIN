export class PluginAudio {
    nomPlugin : string;
    description: string;
    nomCreateur : string;
    tag1: string;
    tag2: string;
    key: string;
    image : string
 
    constructor(nomPlugin : string,
        description: string,
        nomCreateur : string,
        key:string,
        tag1?: string,
        tag2?: string,
        image? : string) {
            this.description = description;
            this.nomCreateur = nomCreateur;
            this.nomPlugin = nomPlugin;
            this.key = key
            tag1? this.tag1 = tag1 : '';
            tag2? this.tag2 = tag2 : '';
            image? this.image = image  : this.image = 'https://api.moddevices.com/v2/lv2/plugins/56c4ba21770cb318f9cd2e80/screenshot/';


        }
}
