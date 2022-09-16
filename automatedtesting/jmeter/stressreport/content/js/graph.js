/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 113.0, "minX": 0.0, "maxY": 25747.0, "series": [{"data": [[0.0, 113.0], [0.1, 113.0], [0.2, 113.0], [0.3, 113.0], [0.4, 113.0], [0.5, 113.0], [0.6, 113.0], [0.7, 113.0], [0.8, 113.0], [0.9, 113.0], [1.0, 113.0], [1.1, 113.0], [1.2, 113.0], [1.3, 114.0], [1.4, 114.0], [1.5, 114.0], [1.6, 114.0], [1.7, 114.0], [1.8, 114.0], [1.9, 114.0], [2.0, 114.0], [2.1, 114.0], [2.2, 114.0], [2.3, 114.0], [2.4, 114.0], [2.5, 115.0], [2.6, 115.0], [2.7, 115.0], [2.8, 115.0], [2.9, 115.0], [3.0, 115.0], [3.1, 115.0], [3.2, 115.0], [3.3, 115.0], [3.4, 115.0], [3.5, 115.0], [3.6, 115.0], [3.7, 115.0], [3.8, 118.0], [3.9, 118.0], [4.0, 118.0], [4.1, 118.0], [4.2, 118.0], [4.3, 118.0], [4.4, 118.0], [4.5, 118.0], [4.6, 118.0], [4.7, 118.0], [4.8, 118.0], [4.9, 118.0], [5.0, 119.0], [5.1, 119.0], [5.2, 119.0], [5.3, 119.0], [5.4, 119.0], [5.5, 119.0], [5.6, 119.0], [5.7, 119.0], [5.8, 119.0], [5.9, 119.0], [6.0, 119.0], [6.1, 119.0], [6.2, 119.0], [6.3, 119.0], [6.4, 119.0], [6.5, 119.0], [6.6, 119.0], [6.7, 119.0], [6.8, 119.0], [6.9, 119.0], [7.0, 119.0], [7.1, 119.0], [7.2, 119.0], [7.3, 119.0], [7.4, 119.0], [7.5, 121.0], [7.6, 121.0], [7.7, 121.0], [7.8, 121.0], [7.9, 121.0], [8.0, 121.0], [8.1, 121.0], [8.2, 121.0], [8.3, 121.0], [8.4, 121.0], [8.5, 121.0], [8.6, 121.0], [8.7, 121.0], [8.8, 124.0], [8.9, 124.0], [9.0, 124.0], [9.1, 124.0], [9.2, 124.0], [9.3, 124.0], [9.4, 124.0], [9.5, 124.0], [9.6, 124.0], [9.7, 124.0], [9.8, 124.0], [9.9, 124.0], [10.0, 126.0], [10.1, 126.0], [10.2, 126.0], [10.3, 126.0], [10.4, 126.0], [10.5, 126.0], [10.6, 126.0], [10.7, 126.0], [10.8, 126.0], [10.9, 126.0], [11.0, 126.0], [11.1, 126.0], [11.2, 126.0], [11.3, 128.0], [11.4, 128.0], [11.5, 128.0], [11.6, 128.0], [11.7, 128.0], [11.8, 128.0], [11.9, 128.0], [12.0, 128.0], [12.1, 128.0], [12.2, 128.0], [12.3, 128.0], [12.4, 128.0], [12.5, 130.0], [12.6, 130.0], [12.7, 130.0], [12.8, 130.0], [12.9, 130.0], [13.0, 130.0], [13.1, 130.0], [13.2, 130.0], [13.3, 130.0], [13.4, 130.0], [13.5, 130.0], [13.6, 130.0], [13.7, 130.0], [13.8, 130.0], [13.9, 130.0], [14.0, 130.0], [14.1, 130.0], [14.2, 130.0], [14.3, 130.0], [14.4, 130.0], [14.5, 130.0], [14.6, 130.0], [14.7, 130.0], [14.8, 130.0], [14.9, 130.0], [15.0, 135.0], [15.1, 135.0], [15.2, 135.0], [15.3, 135.0], [15.4, 135.0], [15.5, 135.0], [15.6, 135.0], [15.7, 135.0], [15.8, 135.0], [15.9, 135.0], [16.0, 135.0], [16.1, 135.0], [16.2, 135.0], [16.3, 135.0], [16.4, 135.0], [16.5, 135.0], [16.6, 135.0], [16.7, 135.0], [16.8, 135.0], [16.9, 135.0], [17.0, 135.0], [17.1, 135.0], [17.2, 135.0], [17.3, 135.0], [17.4, 135.0], [17.5, 136.0], [17.6, 136.0], [17.7, 136.0], [17.8, 136.0], [17.9, 136.0], [18.0, 136.0], [18.1, 136.0], [18.2, 136.0], [18.3, 136.0], [18.4, 136.0], [18.5, 136.0], [18.6, 136.0], [18.7, 136.0], [18.8, 136.0], [18.9, 136.0], [19.0, 136.0], [19.1, 136.0], [19.2, 136.0], [19.3, 136.0], [19.4, 136.0], [19.5, 136.0], [19.6, 136.0], [19.7, 136.0], [19.8, 136.0], [19.9, 136.0], [20.0, 136.0], [20.1, 136.0], [20.2, 136.0], [20.3, 136.0], [20.4, 136.0], [20.5, 136.0], [20.6, 136.0], [20.7, 136.0], [20.8, 136.0], [20.9, 136.0], [21.0, 136.0], [21.1, 136.0], [21.2, 136.0], [21.3, 136.0], [21.4, 136.0], [21.5, 136.0], [21.6, 136.0], [21.7, 136.0], [21.8, 136.0], [21.9, 136.0], [22.0, 136.0], [22.1, 136.0], [22.2, 136.0], [22.3, 136.0], [22.4, 136.0], [22.5, 136.0], [22.6, 136.0], [22.7, 136.0], [22.8, 136.0], [22.9, 136.0], [23.0, 136.0], [23.1, 136.0], [23.2, 136.0], [23.3, 136.0], [23.4, 136.0], [23.5, 136.0], [23.6, 136.0], [23.7, 136.0], [23.8, 137.0], [23.9, 137.0], [24.0, 137.0], [24.1, 137.0], [24.2, 137.0], [24.3, 137.0], [24.4, 137.0], [24.5, 137.0], [24.6, 137.0], [24.7, 137.0], [24.8, 137.0], [24.9, 137.0], [25.0, 1877.0], [25.1, 1877.0], [25.2, 1877.0], [25.3, 1877.0], [25.4, 1877.0], [25.5, 1877.0], [25.6, 1877.0], [25.7, 1877.0], [25.8, 1877.0], [25.9, 1877.0], [26.0, 1877.0], [26.1, 1877.0], [26.2, 1877.0], [26.3, 2085.0], [26.4, 2085.0], [26.5, 2085.0], [26.6, 2085.0], [26.7, 2085.0], [26.8, 2085.0], [26.9, 2085.0], [27.0, 2085.0], [27.1, 2085.0], [27.2, 2085.0], [27.3, 2085.0], [27.4, 2085.0], [27.5, 2291.0], [27.6, 2291.0], [27.7, 2291.0], [27.8, 2291.0], [27.9, 2291.0], [28.0, 2291.0], [28.1, 2291.0], [28.2, 2291.0], [28.3, 2291.0], [28.4, 2291.0], [28.5, 2291.0], [28.6, 2291.0], [28.7, 2291.0], [28.8, 2500.0], [28.9, 2500.0], [29.0, 2500.0], [29.1, 2500.0], [29.2, 2500.0], [29.3, 2500.0], [29.4, 2500.0], [29.5, 2500.0], [29.6, 2500.0], [29.7, 2500.0], [29.8, 2500.0], [29.9, 2500.0], [30.0, 2670.0], [30.1, 2670.0], [30.2, 2670.0], [30.3, 2670.0], [30.4, 2670.0], [30.5, 2670.0], [30.6, 2670.0], [30.7, 2670.0], [30.8, 2670.0], [30.9, 2670.0], [31.0, 2670.0], [31.1, 2670.0], [31.2, 2670.0], [31.3, 2874.0], [31.4, 2874.0], [31.5, 2874.0], [31.6, 2874.0], [31.7, 2874.0], [31.8, 2874.0], [31.9, 2874.0], [32.0, 2874.0], [32.1, 2874.0], [32.2, 2874.0], [32.3, 2874.0], [32.4, 2874.0], [32.5, 3089.0], [32.6, 3089.0], [32.7, 3089.0], [32.8, 3089.0], [32.9, 3089.0], [33.0, 3089.0], [33.1, 3089.0], [33.2, 3089.0], [33.3, 3089.0], [33.4, 3089.0], [33.5, 3089.0], [33.6, 3089.0], [33.7, 3089.0], [33.8, 3283.0], [33.9, 3283.0], [34.0, 3283.0], [34.1, 3283.0], [34.2, 3283.0], [34.3, 3283.0], [34.4, 3283.0], [34.5, 3283.0], [34.6, 3283.0], [34.7, 3283.0], [34.8, 3283.0], [34.9, 3283.0], [35.0, 3479.0], [35.1, 3479.0], [35.2, 3479.0], [35.3, 3479.0], [35.4, 3479.0], [35.5, 3479.0], [35.6, 3479.0], [35.7, 3479.0], [35.8, 3479.0], [35.9, 3479.0], [36.0, 3479.0], [36.1, 3479.0], [36.2, 3479.0], [36.3, 3685.0], [36.4, 3685.0], [36.5, 3685.0], [36.6, 3685.0], [36.7, 3685.0], [36.8, 3685.0], [36.9, 3685.0], [37.0, 3685.0], [37.1, 3685.0], [37.2, 3685.0], [37.3, 3685.0], [37.4, 3685.0], [37.5, 5433.0], [37.6, 5433.0], [37.7, 5433.0], [37.8, 5433.0], [37.9, 5433.0], [38.0, 5433.0], [38.1, 5433.0], [38.2, 5433.0], [38.3, 5433.0], [38.4, 5433.0], [38.5, 5433.0], [38.6, 5433.0], [38.7, 5433.0], [38.8, 5621.0], [38.9, 5621.0], [39.0, 5621.0], [39.1, 5621.0], [39.2, 5621.0], [39.3, 5621.0], [39.4, 5621.0], [39.5, 5621.0], [39.6, 5621.0], [39.7, 5621.0], [39.8, 5621.0], [39.9, 5621.0], [40.0, 5828.0], [40.1, 5828.0], [40.2, 5828.0], [40.3, 5828.0], [40.4, 5828.0], [40.5, 5828.0], [40.6, 5828.0], [40.7, 5828.0], [40.8, 5828.0], [40.9, 5828.0], [41.0, 5828.0], [41.1, 5828.0], [41.2, 5828.0], [41.3, 6030.0], [41.4, 6030.0], [41.5, 6030.0], [41.6, 6030.0], [41.7, 6030.0], [41.8, 6030.0], [41.9, 6030.0], [42.0, 6030.0], [42.1, 6030.0], [42.2, 6030.0], [42.3, 6030.0], [42.4, 6030.0], [42.5, 6230.0], [42.6, 6230.0], [42.7, 6230.0], [42.8, 6230.0], [42.9, 6230.0], [43.0, 6230.0], [43.1, 6230.0], [43.2, 6230.0], [43.3, 6230.0], [43.4, 6230.0], [43.5, 6230.0], [43.6, 6230.0], [43.7, 6230.0], [43.8, 6433.0], [43.9, 6433.0], [44.0, 6433.0], [44.1, 6433.0], [44.2, 6433.0], [44.3, 6433.0], [44.4, 6433.0], [44.5, 6433.0], [44.6, 6433.0], [44.7, 6433.0], [44.8, 6433.0], [44.9, 6433.0], [45.0, 6621.0], [45.1, 6621.0], [45.2, 6621.0], [45.3, 6621.0], [45.4, 6621.0], [45.5, 6621.0], [45.6, 6621.0], [45.7, 6621.0], [45.8, 6621.0], [45.9, 6621.0], [46.0, 6621.0], [46.1, 6621.0], [46.2, 6621.0], [46.3, 6831.0], [46.4, 6831.0], [46.5, 6831.0], [46.6, 6831.0], [46.7, 6831.0], [46.8, 6831.0], [46.9, 6831.0], [47.0, 6831.0], [47.1, 6831.0], [47.2, 6831.0], [47.3, 6831.0], [47.4, 6831.0], [47.5, 7029.0], [47.6, 7029.0], [47.7, 7029.0], [47.8, 7029.0], [47.9, 7029.0], [48.0, 7029.0], [48.1, 7029.0], [48.2, 7029.0], [48.3, 7029.0], [48.4, 7029.0], [48.5, 7029.0], [48.6, 7029.0], [48.7, 7029.0], [48.8, 7222.0], [48.9, 7222.0], [49.0, 7222.0], [49.1, 7222.0], [49.2, 7222.0], [49.3, 7222.0], [49.4, 7222.0], [49.5, 7222.0], [49.6, 7222.0], [49.7, 7222.0], [49.8, 7222.0], [49.9, 7222.0], [50.0, 9279.0], [50.1, 9279.0], [50.2, 9279.0], [50.3, 9279.0], [50.4, 9279.0], [50.5, 9279.0], [50.6, 9279.0], [50.7, 9279.0], [50.8, 9279.0], [50.9, 9279.0], [51.0, 9279.0], [51.1, 9279.0], [51.2, 9279.0], [51.3, 9400.0], [51.4, 9400.0], [51.5, 9400.0], [51.6, 9400.0], [51.7, 9400.0], [51.8, 9400.0], [51.9, 9400.0], [52.0, 9400.0], [52.1, 9400.0], [52.2, 9400.0], [52.3, 9400.0], [52.4, 9400.0], [52.5, 9480.0], [52.6, 9480.0], [52.7, 9480.0], [52.8, 9480.0], [52.9, 9480.0], [53.0, 9480.0], [53.1, 9480.0], [53.2, 9480.0], [53.3, 9480.0], [53.4, 9480.0], [53.5, 9480.0], [53.6, 9480.0], [53.7, 9480.0], [53.8, 9601.0], [53.9, 9601.0], [54.0, 9601.0], [54.1, 9601.0], [54.2, 9601.0], [54.3, 9601.0], [54.4, 9601.0], [54.5, 9601.0], [54.6, 9601.0], [54.7, 9601.0], [54.8, 9601.0], [54.9, 9601.0], [55.0, 9680.0], [55.1, 9680.0], [55.2, 9680.0], [55.3, 9680.0], [55.4, 9680.0], [55.5, 9680.0], [55.6, 9680.0], [55.7, 9680.0], [55.8, 9680.0], [55.9, 9680.0], [56.0, 9680.0], [56.1, 9680.0], [56.2, 9680.0], [56.3, 9801.0], [56.4, 9801.0], [56.5, 9801.0], [56.6, 9801.0], [56.7, 9801.0], [56.8, 9801.0], [56.9, 9801.0], [57.0, 9801.0], [57.1, 9801.0], [57.2, 9801.0], [57.3, 9801.0], [57.4, 9801.0], [57.5, 9879.0], [57.6, 9879.0], [57.7, 9879.0], [57.8, 9879.0], [57.9, 9879.0], [58.0, 9879.0], [58.1, 9879.0], [58.2, 9879.0], [58.3, 9879.0], [58.4, 9879.0], [58.5, 9879.0], [58.6, 9879.0], [58.7, 9879.0], [58.8, 9995.0], [58.9, 9995.0], [59.0, 9995.0], [59.1, 9995.0], [59.2, 9995.0], [59.3, 9995.0], [59.4, 9995.0], [59.5, 9995.0], [59.6, 9995.0], [59.7, 9995.0], [59.8, 9995.0], [59.9, 9995.0], [60.0, 10077.0], [60.1, 10077.0], [60.2, 10077.0], [60.3, 10077.0], [60.4, 10077.0], [60.5, 10077.0], [60.6, 10077.0], [60.7, 10077.0], [60.8, 10077.0], [60.9, 10077.0], [61.0, 10077.0], [61.1, 10077.0], [61.2, 10077.0], [61.3, 10203.0], [61.4, 10203.0], [61.5, 10203.0], [61.6, 10203.0], [61.7, 10203.0], [61.8, 10203.0], [61.9, 10203.0], [62.0, 10203.0], [62.1, 10203.0], [62.2, 10203.0], [62.3, 10203.0], [62.4, 10203.0], [62.5, 10280.0], [62.6, 10280.0], [62.7, 10280.0], [62.8, 10280.0], [62.9, 10280.0], [63.0, 10280.0], [63.1, 10280.0], [63.2, 10280.0], [63.3, 10280.0], [63.4, 10280.0], [63.5, 10280.0], [63.6, 10280.0], [63.7, 10280.0], [63.8, 10404.0], [63.9, 10404.0], [64.0, 10404.0], [64.1, 10404.0], [64.2, 10404.0], [64.3, 10404.0], [64.4, 10404.0], [64.5, 10404.0], [64.6, 10404.0], [64.7, 10404.0], [64.8, 10404.0], [64.9, 10404.0], [65.0, 10478.0], [65.1, 10478.0], [65.2, 10478.0], [65.3, 10478.0], [65.4, 10478.0], [65.5, 10478.0], [65.6, 10478.0], [65.7, 10478.0], [65.8, 10478.0], [65.9, 10478.0], [66.0, 10478.0], [66.1, 10478.0], [66.2, 10478.0], [66.3, 10603.0], [66.4, 10603.0], [66.5, 10603.0], [66.6, 10603.0], [66.7, 10603.0], [66.8, 10603.0], [66.9, 10603.0], [67.0, 10603.0], [67.1, 10603.0], [67.2, 10603.0], [67.3, 10603.0], [67.4, 10603.0], [67.5, 10678.0], [67.6, 10678.0], [67.7, 10678.0], [67.8, 10678.0], [67.9, 10678.0], [68.0, 10678.0], [68.1, 10678.0], [68.2, 10678.0], [68.3, 10678.0], [68.4, 10678.0], [68.5, 10678.0], [68.6, 10678.0], [68.7, 10678.0], [68.8, 10802.0], [68.9, 10802.0], [69.0, 10802.0], [69.1, 10802.0], [69.2, 10802.0], [69.3, 10802.0], [69.4, 10802.0], [69.5, 10802.0], [69.6, 10802.0], [69.7, 10802.0], [69.8, 10802.0], [69.9, 10802.0], [70.0, 10879.0], [70.1, 10879.0], [70.2, 10879.0], [70.3, 10879.0], [70.4, 10879.0], [70.5, 10879.0], [70.6, 10879.0], [70.7, 10879.0], [70.8, 10879.0], [70.9, 10879.0], [71.0, 10879.0], [71.1, 10879.0], [71.2, 10879.0], [71.3, 11000.0], [71.4, 11000.0], [71.5, 11000.0], [71.6, 11000.0], [71.7, 11000.0], [71.8, 11000.0], [71.9, 11000.0], [72.0, 11000.0], [72.1, 11000.0], [72.2, 11000.0], [72.3, 11000.0], [72.4, 11000.0], [72.5, 11076.0], [72.6, 11076.0], [72.7, 11076.0], [72.8, 11076.0], [72.9, 11076.0], [73.0, 11076.0], [73.1, 11076.0], [73.2, 11076.0], [73.3, 11076.0], [73.4, 11076.0], [73.5, 11076.0], [73.6, 11076.0], [73.7, 11076.0], [73.8, 11194.0], [73.9, 11194.0], [74.0, 11194.0], [74.1, 11194.0], [74.2, 11194.0], [74.3, 11194.0], [74.4, 11194.0], [74.5, 11194.0], [74.6, 11194.0], [74.7, 11194.0], [74.8, 11194.0], [74.9, 11194.0], [75.0, 11212.0], [75.1, 11212.0], [75.2, 11212.0], [75.3, 11212.0], [75.4, 11212.0], [75.5, 11212.0], [75.6, 11212.0], [75.7, 11212.0], [75.8, 11212.0], [75.9, 11212.0], [76.0, 11212.0], [76.1, 11212.0], [76.2, 11212.0], [76.3, 11342.0], [76.4, 11342.0], [76.5, 11342.0], [76.6, 11342.0], [76.7, 11342.0], [76.8, 11342.0], [76.9, 11342.0], [77.0, 11342.0], [77.1, 11342.0], [77.2, 11342.0], [77.3, 11342.0], [77.4, 11342.0], [77.5, 11543.0], [77.6, 11543.0], [77.7, 11543.0], [77.8, 11543.0], [77.9, 11543.0], [78.0, 11543.0], [78.1, 11543.0], [78.2, 11543.0], [78.3, 11543.0], [78.4, 11543.0], [78.5, 11543.0], [78.6, 11543.0], [78.7, 11543.0], [78.8, 11751.0], [78.9, 11751.0], [79.0, 11751.0], [79.1, 11751.0], [79.2, 11751.0], [79.3, 11751.0], [79.4, 11751.0], [79.5, 11751.0], [79.6, 11751.0], [79.7, 11751.0], [79.8, 11751.0], [79.9, 11751.0], [80.0, 11942.0], [80.1, 11942.0], [80.2, 11942.0], [80.3, 11942.0], [80.4, 11942.0], [80.5, 11942.0], [80.6, 11942.0], [80.7, 11942.0], [80.8, 11942.0], [80.9, 11942.0], [81.0, 11942.0], [81.1, 11942.0], [81.2, 11942.0], [81.3, 12157.0], [81.4, 12157.0], [81.5, 12157.0], [81.6, 12157.0], [81.7, 12157.0], [81.8, 12157.0], [81.9, 12157.0], [82.0, 12157.0], [82.1, 12157.0], [82.2, 12157.0], [82.3, 12157.0], [82.4, 12157.0], [82.5, 12412.0], [82.6, 12412.0], [82.7, 12412.0], [82.8, 12412.0], [82.9, 12412.0], [83.0, 12412.0], [83.1, 12412.0], [83.2, 12412.0], [83.3, 12412.0], [83.4, 12412.0], [83.5, 12412.0], [83.6, 12412.0], [83.7, 12412.0], [83.8, 12555.0], [83.9, 12555.0], [84.0, 12555.0], [84.1, 12555.0], [84.2, 12555.0], [84.3, 12555.0], [84.4, 12555.0], [84.5, 12555.0], [84.6, 12555.0], [84.7, 12555.0], [84.8, 12555.0], [84.9, 12555.0], [85.0, 12750.0], [85.1, 12750.0], [85.2, 12750.0], [85.3, 12750.0], [85.4, 12750.0], [85.5, 12750.0], [85.6, 12750.0], [85.7, 12750.0], [85.8, 12750.0], [85.9, 12750.0], [86.0, 12750.0], [86.1, 12750.0], [86.2, 12750.0], [86.3, 12950.0], [86.4, 12950.0], [86.5, 12950.0], [86.6, 12950.0], [86.7, 12950.0], [86.8, 12950.0], [86.9, 12950.0], [87.0, 12950.0], [87.1, 12950.0], [87.2, 12950.0], [87.3, 12950.0], [87.4, 12950.0], [87.5, 23944.0], [87.6, 23944.0], [87.7, 23944.0], [87.8, 23944.0], [87.9, 23944.0], [88.0, 23944.0], [88.1, 23944.0], [88.2, 23944.0], [88.3, 23944.0], [88.4, 23944.0], [88.5, 23944.0], [88.6, 23944.0], [88.7, 23944.0], [88.8, 24147.0], [88.9, 24147.0], [89.0, 24147.0], [89.1, 24147.0], [89.2, 24147.0], [89.3, 24147.0], [89.4, 24147.0], [89.5, 24147.0], [89.6, 24147.0], [89.7, 24147.0], [89.8, 24147.0], [89.9, 24147.0], [90.0, 24348.0], [90.1, 24348.0], [90.2, 24348.0], [90.3, 24348.0], [90.4, 24348.0], [90.5, 24348.0], [90.6, 24348.0], [90.7, 24348.0], [90.8, 24348.0], [90.9, 24348.0], [91.0, 24348.0], [91.1, 24348.0], [91.2, 24348.0], [91.3, 24555.0], [91.4, 24555.0], [91.5, 24555.0], [91.6, 24555.0], [91.7, 24555.0], [91.8, 24555.0], [91.9, 24555.0], [92.0, 24555.0], [92.1, 24555.0], [92.2, 24555.0], [92.3, 24555.0], [92.4, 24555.0], [92.5, 24746.0], [92.6, 24746.0], [92.7, 24746.0], [92.8, 24746.0], [92.9, 24746.0], [93.0, 24746.0], [93.1, 24746.0], [93.2, 24746.0], [93.3, 24746.0], [93.4, 24746.0], [93.5, 24746.0], [93.6, 24746.0], [93.7, 24746.0], [93.8, 24953.0], [93.9, 24953.0], [94.0, 24953.0], [94.1, 24953.0], [94.2, 24953.0], [94.3, 24953.0], [94.4, 24953.0], [94.5, 24953.0], [94.6, 24953.0], [94.7, 24953.0], [94.8, 24953.0], [94.9, 24953.0], [95.0, 25149.0], [95.1, 25149.0], [95.2, 25149.0], [95.3, 25149.0], [95.4, 25149.0], [95.5, 25149.0], [95.6, 25149.0], [95.7, 25149.0], [95.8, 25149.0], [95.9, 25149.0], [96.0, 25149.0], [96.1, 25149.0], [96.2, 25149.0], [96.3, 25353.0], [96.4, 25353.0], [96.5, 25353.0], [96.6, 25353.0], [96.7, 25353.0], [96.8, 25353.0], [96.9, 25353.0], [97.0, 25353.0], [97.1, 25353.0], [97.2, 25353.0], [97.3, 25353.0], [97.4, 25353.0], [97.5, 25542.0], [97.6, 25542.0], [97.7, 25542.0], [97.8, 25542.0], [97.9, 25542.0], [98.0, 25542.0], [98.1, 25542.0], [98.2, 25542.0], [98.3, 25542.0], [98.4, 25542.0], [98.5, 25542.0], [98.6, 25542.0], [98.7, 25542.0], [98.8, 25747.0], [98.9, 25747.0], [99.0, 25747.0], [99.1, 25747.0], [99.2, 25747.0], [99.3, 25747.0], [99.4, 25747.0], [99.5, 25747.0], [99.6, 25747.0], [99.7, 25747.0], [99.8, 25747.0], [99.9, 25747.0]], "isOverall": false, "label": "Get Users", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 20.0, "series": [{"data": [[1800.0, 1.0], [2000.0, 1.0], [2200.0, 1.0], [2500.0, 1.0], [2600.0, 1.0], [2800.0, 1.0], [3000.0, 1.0], [3200.0, 1.0], [3400.0, 1.0], [3600.0, 1.0], [5600.0, 1.0], [5400.0, 1.0], [5800.0, 1.0], [6000.0, 1.0], [6200.0, 1.0], [6600.0, 1.0], [6400.0, 1.0], [6800.0, 1.0], [7000.0, 1.0], [7200.0, 1.0], [9200.0, 1.0], [9400.0, 2.0], [9600.0, 2.0], [10200.0, 2.0], [10000.0, 1.0], [9800.0, 2.0], [9900.0, 1.0], [10400.0, 2.0], [10600.0, 2.0], [11000.0, 2.0], [10800.0, 2.0], [11200.0, 1.0], [11100.0, 1.0], [11300.0, 1.0], [11500.0, 1.0], [11700.0, 1.0], [11900.0, 1.0], [12100.0, 1.0], [12700.0, 1.0], [12500.0, 1.0], [12400.0, 1.0], [12900.0, 1.0], [23900.0, 1.0], [24100.0, 1.0], [24300.0, 1.0], [24500.0, 1.0], [25500.0, 1.0], [24700.0, 1.0], [25100.0, 1.0], [24900.0, 1.0], [25300.0, 1.0], [100.0, 20.0], [25700.0, 1.0]], "isOverall": false, "label": "Get Users", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 25700.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 40.0, "minX": 2.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 40.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 40.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 40.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 2.6999999999999993, "minX": 1.663323E12, "maxY": 10.0, "series": [{"data": [[1.66332324E12, 6.0], [1.66332336E12, 5.900000000000001], [1.66332306E12, 2.6999999999999993], [1.663323E12, 10.0], [1.66332312E12, 6.1], [1.6633233E12, 6.000000000000001]], "isOverall": false, "label": "stress", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66332336E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 1812.818181818182, "minX": 1.0, "maxY": 19165.8, "series": [{"data": [[8.0, 7080.0], [4.0, 8020.25], [1.0, 1812.818181818182], [2.0, 5547.5], [9.0, 14169.25], [5.0, 18451.5], [10.0, 19165.8], [11.0, 7368.0], [12.0, 11251.733333333334], [3.0, 13014.42857142857], [6.0, 4157.5], [7.0, 8652.0]], "isOverall": false, "label": "Get Users", "isController": false}, {"data": [[6.100000000000001, 8344.275]], "isOverall": false, "label": "Get Users-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 12.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 0.0, "minX": 1.663323E12, "maxY": 356.43333333333334, "series": [{"data": [[1.66332324E12, 51.71666666666667], [1.66332336E12, 51.71666666666667], [1.66332306E12, 131.5], [1.663323E12, 356.43333333333334], [1.66332312E12, 51.71666666666667], [1.6633233E12, 51.71666666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.66332324E12, 26.183333333333334], [1.66332336E12, 26.183333333333334], [1.66332306E12, 78.55], [1.663323E12, 0.0], [1.66332312E12, 26.183333333333334], [1.6633233E12, 26.183333333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66332336E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 2783.3, "minX": 1.663323E12, "maxY": 24848.4, "series": [{"data": [[1.66332324E12, 6327.8], [1.66332336E12, 10300.3], [1.66332306E12, 4105.266666666666], [1.663323E12, 10178.6], [1.66332312E12, 24848.4], [1.6633233E12, 2783.3]], "isOverall": false, "label": "Get Users", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66332336E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 0.0, "minX": 1.663323E12, "maxY": 24848.300000000003, "series": [{"data": [[1.66332324E12, 6327.8], [1.66332336E12, 10300.3], [1.66332306E12, 4105.233333333333], [1.663323E12, 0.0], [1.66332312E12, 24848.300000000003], [1.6633233E12, 2783.3]], "isOverall": false, "label": "Get Users", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66332336E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 2738.0, "minX": 1.663323E12, "maxY": 10261.5, "series": [{"data": [[1.66332324E12, 6283.9], [1.66332336E12, 10257.8], [1.66332306E12, 3492.8333333333344], [1.663323E12, 10178.6], [1.66332312E12, 10261.5], [1.6633233E12, 2738.0]], "isOverall": false, "label": "Get Users", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66332336E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 1877.0, "minX": 1.66332312E12, "maxY": 25747.0, "series": [{"data": [[1.66332324E12, 7222.0], [1.66332336E12, 11194.0], [1.66332312E12, 25747.0], [1.6633233E12, 3685.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.66332324E12, 7202.7], [1.66332336E12, 11174.6], [1.66332312E12, 25726.5], [1.6633233E12, 3664.4]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.66332324E12, 7222.0], [1.66332336E12, 11194.0], [1.66332312E12, 25747.0], [1.6633233E12, 3685.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.66332324E12, 7222.0], [1.66332336E12, 11194.0], [1.66332312E12, 25747.0], [1.6633233E12, 3685.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.66332324E12, 5433.0], [1.66332336E12, 9400.0], [1.66332312E12, 23944.0], [1.6633233E12, 1877.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.66332324E12, 6331.5], [1.66332336E12, 10303.5], [1.66332312E12, 24849.5], [1.6633233E12, 2772.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66332336E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 121.0, "minX": 1.0, "maxY": 11144.0, "series": [{"data": [[10.0, 8311.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[4.0, 127.0], [1.0, 121.0], [10.0, 11144.0], [5.0, 135.0], [3.0, 124.5]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 10.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 121.0, "minX": 1.0, "maxY": 8311.0, "series": [{"data": [[10.0, 8311.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[4.0, 127.0], [1.0, 121.0], [10.0, 5606.0], [5.0, 134.0], [3.0, 124.5]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 10.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 0.05, "minX": 1.66332294E12, "maxY": 0.5, "series": [{"data": [[1.66332324E12, 0.05], [1.66332294E12, 0.05], [1.66332336E12, 0.16666666666666666], [1.66332306E12, 0.5], [1.663323E12, 0.11666666666666667], [1.66332318E12, 0.11666666666666667], [1.66332312E12, 0.16666666666666666], [1.6633233E12, 0.16666666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66332336E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 0.16666666666666666, "minX": 1.663323E12, "maxY": 0.5, "series": [{"data": [[1.66332324E12, 0.16666666666666666], [1.66332336E12, 0.16666666666666666], [1.66332312E12, 0.16666666666666666], [1.6633233E12, 0.16666666666666666]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.66332306E12, 0.5]], "isOverall": false, "label": "404", "isController": false}, {"data": [[1.663323E12, 0.16666666666666666]], "isOverall": false, "label": "Non HTTP response code: java.net.UnknownHostException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66332336E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.16666666666666666, "minX": 1.663323E12, "maxY": 0.5, "series": [{"data": [[1.66332306E12, 0.5], [1.663323E12, 0.16666666666666666]], "isOverall": false, "label": "Get Users-failure", "isController": false}, {"data": [[1.66332324E12, 0.16666666666666666], [1.66332336E12, 0.16666666666666666], [1.66332312E12, 0.16666666666666666], [1.6633233E12, 0.16666666666666666]], "isOverall": false, "label": "Get Users-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66332336E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 0.16666666666666666, "minX": 1.663323E12, "maxY": 0.5, "series": [{"data": [[1.66332324E12, 0.16666666666666666], [1.66332336E12, 0.16666666666666666], [1.66332312E12, 0.16666666666666666], [1.6633233E12, 0.16666666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.66332306E12, 0.5], [1.663323E12, 0.16666666666666666]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66332336E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

