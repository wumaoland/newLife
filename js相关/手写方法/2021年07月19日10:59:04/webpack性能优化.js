/**
 * 一、优化方向
 * 1、构建时间太久
 * 2、打包体积太大
 * 
 * 二、针对构建的优化
 * 1、resolve.modules 用于配置webpack去哪些目录寻找第三方模块,默认是node_modules，但会去当前目录的./node_modules，没有的话再去../node_modules，最后一直找到根目录，这是npm查找包的规则
 * 所以可以直接指定项目的根目录，这样就不用递归查找了
 * resolve:{
 *  modules:[path.resolve(__dirname,'node_modules')]
 * }
 * 
 * 2、优化resolve.extensions配置
 * 在导入没有带文件扩展名的路径时，webpack会自动带上扩展名去尝试查看文件是否存在,二resolve.extensions用于配置尝试扩展名的列表，默认是extensions:['js','json']
 * 当遇到require('/data')时 webpack会先尝试寻找data.js，没有再去查找data.json 列表越长或者正确的扩展名越靠后，则尝试的次数会越多
 * 所以配置的时候需要遵守：
 * 1、高频词扩展名优先放在前面
 * 2、列表尽可能的少，例如只有三个js、jsx、json
 * 3、书写导入语句的时候写上扩展名
 * 
 * 3、优化resolve.include/exclude配置
 * 以babel-loader为例，可以通过include和exclude帮助我们避免node_modules这类庞大的文件夹
 * 即通过include告诉webpack哪些是需要检测的，通过exclude告诉webpack哪些不需要检测
 * 
 * 三、通过loader和plugin优化
 * 1、缓存
 * 在babel-loader开启cache后，将loader的编译结果写入硬盘缓存，再次构建如果没有发生文件变化，则直接拉取缓存结果
 * uglifyjs-webpack-plugin，通过这个插件也可以解决缓存问题
 * 
 * 2、多线程
 * 由于有大量文件需要解析和处理，构建是文件读写和计算密集型的操作，特别是当文件数量变多后，webpack构建慢的问题会显得很严重
 * 文件读写和计算操作是无法避免的，那能不能让webpack同一时刻处理多个任务，发挥多核cpu的威力，以提高构建速度呢
 * happypack可以将任务分解为多个子进程去并发执行，提高打包效率
 * thread-loader和happypack一样，但是配置比较简单
 * 
 * 3、多进程压缩
 * 因为自带的uglifyjsWebpack压缩插件是单线程运行的，而TerserWebpackPlugin可以并发运行压缩功能(多线程)，所以需要进行替换
 * 
 * 4、静态资源分离
 * 通过DllPlugin或者Externals进行静态依赖包的分离
 * 由于CommonsChunkPlugin每次构建会重新构建一次vendor,所以出于效率考虑，使用DllPlugin将第三方库单独打包到一个文件里，只有依赖自身发生版本变化时才重新打包。
 * 
 * 5、代码分离
 * 业务逻辑与依赖库进行分离打包，可以保证上线后，依赖库版本不变的情况下，用户可尽量使用缓存文件，只拉取最新的业务逻辑模块即可。
 * 使用SplitChunkPlugin，可以将应用中的特定部分移至不同文件。若一个模块在不止一个chunk中使用，则应该利用代码分离，让模块在多chunk中共享。
 * 
 * 6、资源压缩
 * js压缩：UglifyjsWebpackPlugin
 * HTML压缩：HtmlWebpackPlugin
 * CSS压缩：MiniCssExtractPlugin
 * 图片压缩：image-webpack-loader
 * 
 * 其他优化点
 * 1、Tree Shaking
 * 通过ES6的 import/export 来检查未引用代码，以及sideEffects来标记无副作用代码，最后用UglifyJSPlugin来做Tree Shaking，从而删除冗余代码
 * 
 * 2、按需加载
 * 
 * 
 */