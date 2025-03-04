import { Command } from "commander";
import { console as richConsole } from 'ansie';

export default function subcommand(program: Command) {
    program.command("about").description("About Boop").action(() => {
        const version = require("../../package.json").version;
        richConsole.log(`<h1 marginBottom="1">Boop v${version}</h1>`);
        richConsole.log(`<p marginTop="0">A todo list integration with Todoist and AI</p>`);
        richConsole.log(`<p marginTop="0" fg="gray">Built with ❤️ by iWonder Designs (https://www.iwonderdesigns.com)</p>`);
        console.log(`
                          █████████          ██████                                                 
                          ████████████      ████████                                                
                          ██████████  ████ ███████████                                              
                          ████████ ████████████████████                                             
                          ██████ ████████ ██████████████             ██████                         
                           ███ ███████████████████████████        ███████████                       
                            ██████████████████████████████      ████████████                        
                             ██████████████████████████████    ████████                             
                             ███████████████████████████████  ███████                               
                             ███████████████████████████████  ██████                                
                            ████████████████████████████████  ██████                                
                     ███████ ██████████████████████ █████████ ██████                                
                     ██████  ████████████████████████████████ ██████                                
                       ██████ ██████████████    ██████████████ ██████                               
                      ██████   ██████████████████ ████████████ ███████                              
                       ██        ██████████████████████████████ ███████                             
                                 ██ ██████████ █████████████████████████                            
                                ████████████████████████████████████████                            
                                ██████████████████████████████████████████                          
                                ██████████████████████████████████████████                          
                                ███████████████████████████████████████████                         
                                ████████████████████████████████████████████                        
                             ███ █████████████  █████████████ ██████████████                        
                            █████ ████████████  ████████████ ████████████████                       
                           ███████████████████  ██████████████████████████████                      
                          ████████ ███████████  ██████████████████████████████                      
                         ██████████ ██████████  ██████████ ███████████████████                      
                         █████████████████████  ██████████████████████████████                      
                        ██████████████████████  █████████ ████████████████████                      
                        ████████████ █████████  ██████████████████████████████                      
                        ██████████████████████  ████████ █████████████████████                      
                        █████████████ ████████  ██████████████████████████████                      
                        ██████████████████████  ██████████████████████████████                      
                        ██████████████████████  ██████████████████████████████                      
                        ██████████████████████  ███████ █████████████████████                       
                        ██████████████ ███████  ████████████████████████████                        
                         █████████████████████  ████████████████████████████                        
                         █████████████████████  ██████ ████████████████████                         
                          █████████████ ██████  ██████ ███████████████████                          
                           ███████████████████  █████████████████████████                           
                            ██████████████████  ████████████████████████                            
                             █████████████████  ██████████████████████                              
                               █████████ █████  █████ ███████████████                               
                                ████████ █████  █████ █████████████                                 
                                  ████████████  █████ ███████████                                   
                                    █████ ████  █████ ████████                                      
                                          ████  █████                                               
                                           █████████                                                

            `)

    });
}
