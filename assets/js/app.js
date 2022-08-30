$(document).ready(function(){
    $('#owl-team').owlCarousel({
        loop:true,
        margin:10,
		items:2,
        nav:false,
    //    responsive:{
    //        0:{
     //           items:1
    //        },
    //        600:{
    //            items:3
    //        },
    //        1000:{
    //            items:5
    //        }
    //    }
    })
	
	 $('#design-card').owlCarousel({
        loop:true,
        margin:10,
		items:1,
		//dots: true,
        nav:false,
    //    responsive:{
    //        0:{
     //           items:1
    //        },
    //        600:{
    //            items:3
    //        },
    //        1000:{
    //            items:5
    //        }
    //    }
    });
	
	
	$('#clients-owl').owlCarousel({
		loop:true,
		margin:15,
		items:6,
		nav:false,
		pagination:false,
		responsive:{
			0:{
			items:1
			},
			600:{
			items:3
			},
			1000:{
			items:6
			}
		}
})
})

	
	

$(document).ready(function(){

	$('#bar1').barfiller({barColor: '#ff517b', duration: 3000});
	$('#bar2').barfiller({barColor: '#ff517b', duration: 3000});
	$('#bar3').barfiller({ barColor: '#ff517b', duration: 3000 });
	$('#bar4').barfiller({ barColor: '#ff517b', duration: 3000 });
	
});

/*---------section eplay btn-----------*/
let btn =document.querySelector(".btn");
let clip = document.querySelector(".clip");

btn.addEventListener("click",clicked);
function clicked(e){
	clip.classList.add("active");
}

let myTab = document.querySelectorAll(".myTab li");
//console.log(myTab);
let myTabArr = Array.from(myTab);
console.log(myTabArr);
let mtTabId = document.getElementById("responsive");
console.log(mtTabId);

let tabArr =[
{
	id:"01",
	img:"./assets/images/responsive-img1.jpg",
	title:"When Creativity Matters in life",
	description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem perferendis quod debitis ab sed sapiente. Ducimus tempore, doloremque asperiores natus reprehenderit dignissimos beatae molestias tenetur cupiditate architecto culpa quibusdam velit magnam sapiente accusantium, repellat earum!",
	classInfo:"responsive",
},
{
	img:"./assets/images/responsive-img2.jpg",
	id:"02",
	title:"When Creativity Matters in life",
	description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem perferendis quod debitis ab sed sapiente. Ducimus tempore, doloremque asperiores natus reprehenderit dignissimos beatae molestias tenetur cupiditate architecto culpa quibusdam velit magnam sapiente accusantium, repellat earum!",
	classInfo:"optimization",
	display:"all",
},
{
	img:"./assets/images/responsive-img3.jpg",
	id:"03",
	title:"When Creativity Matters in life",
	description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem perferendis quod debitis ab sed sapiente. Ducimus tempore, doloremque asperiores natus reprehenderit dignissimos beatae molestias tenetur cupiditate architecto culpa quibusdam velit magnam sapiente accusantium, repellat earum!",
	classInfo:"web-design",
	display:"all",
},
{
	img:"./assets/images/responsive-img4.jpg",
	id:"04",
	title:"When Creativity Matters in life",
	description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem perferendis quod debitis ab sed sapiente. Ducimus tempore, doloremque asperiores natus reprehenderit dignissimos beatae molestias tenetur cupiditate architecto culpa quibusdam velit magnam sapiente accusantium, repellat earum!",
	classInfo:"development",
	display:"all",
},
]

let result="";
keyTab(tabArr);


 myTabArr.forEach(tab =>{
	 tab.addEventListener('click',tabclicked);
 })
function tabclicked(e){
	myTabArr.forEach(tab =>{
		tab.classList.remove("active");
	});
	this.classList.add("active");
	let activeClass = e.target.classList.value;
	let responsiveId= this.dataset.id;
	let myNewArr=[];
	result="";
	
	tabArr.forEach(para =>{
		para.display ="";
		if((responsiveId == para.classInfo)){
			
		myNewArr.push(para);
		};
	})
		
		keyTab(myNewArr);
	
	
}





function keyTab(arr){
	arr.forEach(ele =>{
		result +=`<div class="col-12 ${ele.classInfo}">
					<div class="col-6">
						<div class="responsive-img ${ele.display}">
							<img src="${ele.img}" alt="responsive-img">
						</div>
					</div>
					<div class="col-6">
						<div class="responsive-img-info ${ele.display}">
							<h2>${ele.id}</h2>
							<h3>${ele.title}</h3>
							<p>${ele.description}</p>
							<button class="btn btn-primary"> get in touch </button>
						</div>
					</div>
				</div>`
	});
	 mtTabId.innerHTML =result;
}

/*------------------------------------------------ section graphics --------------------------------------------------*/

 let graphics = document.querySelectorAll(".graphics li");
let graphics_project_img =Array.from(document.querySelectorAll(".graphics-project-img div"));
console.log(graphics_project_img.target);
//console.log(graphics);

let graphicsArr = Array.from(graphics);
graphicsArr.forEach(elem =>{
	elem.addEventListener('click',clickMe);
});

function clickMe(e){
	 let myImages = this.dataset.id
	 graphicsArr.forEach(elem =>{
		  elem.classList.remove("bg-color");
	 });
	
	 this.classList.add("bg-color");
	 console.log( myImages);
	// let myGraphicsImg = document.querySelector('#myImages');
	// myGraphicsImg.classList.remove("hide");
	 
} 