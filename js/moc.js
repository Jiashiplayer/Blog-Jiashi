let data = Mock.mock('http://www.jiashi.com/blogs',{
	"result|20": [{
		"id|+1":1,
		"imgSrc":'@pick(["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg","9.jpg"])',
		"title": "@csentence",
		"summary": "@cparagraph",
		"contents":"@cparagraph(5,10)",
		"tips|1": [
			"html","css","js"
		],
		"username":"Jiashi",
		"view|100-1000": 1000,
		"comment|1-20": 20,
		"zan|10-100": 100,
		"date":"@date('yyyy-MM-dd')"
	}]
})


function getUrlName() { //获取Url中的关键字
	var args = {};// ⽤来存放健值对的空对像
	var url = location.search.length > 0 ? location.search.substring(1) : '';	// 去除?号
	var items = url.split('&');// 按&字符串去拆分数组
	var item = null;
	for (var i = 0; i < items.length; i++) {
		item = items[i].split('=');
		args[item[0]] = item[1]
	}
	return args
}
