import { Pipe, PipeTransform } from '@angular/core';
import { PluginAudio } from './plugin-audio';

@Pipe({
  name: 'firebaseFilter'
})
export class FirebaseFilterPipe implements PipeTransform {

  transform(pluginList: PluginAudio[], filtre: string): any {

    
    var newPluginList = [];
    
    pluginList.forEach( plugin => {

      
      if(plugin.tag1 && plugin.tag1.toUpperCase().includes(filtre.toUpperCase()) || 
      plugin.tag2 && plugin.tag2.toUpperCase().includes(filtre.toUpperCase())){
        
          newPluginList.push(plugin);
        
      }

    })

    return newPluginList;
    
  }

}
