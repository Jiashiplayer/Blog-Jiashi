let data = Mock.mock('http://www.jiekou.com',{
	"result|20": [{
		"imgName":'@pick(["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg","9.jpg"])',
		"title": "@csentence",
		"summary": "@cparagraph",
		"tips|1": [
			"html","css","js"
		],
		"view|100-1000": 1000,
		"comment|1-20": 20,
		"zan|10-100": 100,
		"date":"@date('yy-MM-dd')"
	}]
})