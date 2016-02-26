function* CartesianProduct(list) {

	// 通过下标数组从每个列各获取一个元素
	function getElementByIndex(list, indexArr) 
	{
		// console.log(indexArr)
		var r = [];
		for(var i = 0; i < indexArr.length ;i++) {
			r.push(list[i][indexArr[i]])
		}
		return r;
	}

	var elementsCount = 0; //遍历元素计数

	// 初始化下标数组
	var indexes = [];
	indexes = list.map(function(){
		return 0;
	})
	// console.log('init indexes :' + indexes)

	//j 指向末尾元素
	var last = indexes.length - 1
	var k = last - 1

	while(1) {

		// 循环最后一列的元素
		while(indexes[last] < list[last].length) {
			yield getElementByIndex(list, indexes)
			elementsCount++
			indexes[last] = indexes[last] + 1 // 最末下标增加
		}
		indexes[last] = 0 // 循环完毕，最末下标重置为0

		// 改动下标数组的前n-1项的其中一个，从倒数第二个下标开始
		k = last - 1
		while(k >= 0) {
			
			if(indexes[k] < list[k].length - 1) 
			{
				// 上一级下标增加
			    indexes[k] = indexes[k] + 1
			    break;
			} else {
				indexes[k] = 0
				k = k - 1
			}
		}
		// 循环结束后K<0则代表下标数组遍历完毕
		if(k < 0) 
		{
			break;
		}
	}
	
}