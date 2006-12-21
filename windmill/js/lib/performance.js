/*
Copyright 2006, Open Source Applications Foundation

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/

function Performance() {
  
  //Setting up performance timing object
  timing = new TimeObj();
  
  
  //Setup log4js object
  this.Log =  new Log4js.getLogger("Performance_log");
  this.Log.setLevel(Log4js.Level.ALL);
    
    //Other performance functionality
    
    
};