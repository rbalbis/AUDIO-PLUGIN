export class PluginAudio {
    nomPlugin : string;
    description: string;
    nomCreateur : string;
    tag1: string;
    tag2: string;
    key: string;
 
    constructor(nomPlugin : string,
        description: string,
        nomCreateur : string,
        key:string,
        tag1?: string,
        tag2?: string) {
            this.description = description;
            this.nomCreateur = nomCreateur;
            this.nomPlugin = nomPlugin;
            this.key = key
            tag1? this.tag1 = tag1 : '';
            tag2? this.tag2 = tag2 : '';


        }
}
