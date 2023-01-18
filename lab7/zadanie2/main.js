let categories_button = document.querySelectorAll(".categories_button");

let posts = document.querySelectorAll('.post');

for(let b of categories_button)
{
    b.addEventListener("click", function()
    {
        for(let p of posts)
        {
            if(p.dataset.categories.indexOf(b.dataset.categories)<0)
            {
                
                p.style.display = "none";
            }
            else
            {
                p.style.display = "block";
            }
        }
    });
}






var app9 = new Vue({
  el: '#app-9',
  data: {
	datas: [
     {
		"title" : "Работа с Git в Visual Studio Code",
		"intro" : "Один из способов работать с Гитом.",
		"labels" : ["Git", "Консоль"],
		"image" : "img4/post-1.png",
		"user_login" : "@UserAccountLogin"
	},
	{
		"title" : "Adobe покупают Фигму. Всё пропало?",
		"intro" : "Не факт, но есть разные мнения.",
		"labels" : ["Figma"],
		"image" : "img4/post-2.png",
		"user_login" : "@UserAccountLogin"
	},
	{
		"title" : "Все научились программировать. А дальше-то что?",
		"intro" : "Ученье — свет.",
		"labels" : ["Обучение", "Карьера"],
		"image" : "img4/post-3.png",
		"user_login" : "@UserAccountLogin2"
	},
	{
		"title" : "Мне тяжело учиться, кто поможет?",
		"intro" : "Попали в патовую ситуацию? Тогда кликайте на статью.",
		"labels" : ["Обучение"],
		"image" : "img4/post-4.png",
		"user_login" : "@UserAccountLogin2"
	},
	{
		"title" : "Ключевые навыки фронтендеров в 2022",
		"intro" : "Ежегодное исследование рынка от HTML Academy.",
		"labels" : ["Обучение", "Карьера"],
		"image" : "img4/post-5.png",
		"user_login" : "@UserAccountLogin2"
	},
	{
		"title" : "Фронтенд-новости",
		"intro" : "WAI-ARIA, новинки HTML-форм и 12 ошибок любого джаваскриптера.",
		"labels" : ["Новости"],
		"image" : "img4/post-6.png",
		"user_login" : "@UserAccountLogin2"
	}
  	]
  }
})



function toggleSidebar(ref){
    document.getElementById("sidebar").classList.toggle('active');
}