
		let boxID = document.querySelector('.boxID');
		
		fetch('https://api.github.com/users/m21wx/repos').then((e)=>{
			return e.json()
		}).then((arr)=>{
			let index = 1;
			for(let i in arr){
					let div = `
						<div class='githubID '>  
							<div class='projectAPI'><span>${index++} </span> <span> ${arr[i].name}</span>  <span> <a href="https://m21wx.github.io/${arr[i].name}" target="_blank"> الرابط</a> </span> </div>
							<div  class='dateTime'> <span> ${arr[i].updated_at.slice(0,10)} || ${arr[i].updated_at.slice(11,arr[i].updated_at.length - 1)}</span> </div>
					   </div>
					`;	
					boxID.innerHTML += div
			}
		}).catch((error)=>{
			console.log('يوجد خطاء في الاتصال ')
		})
		