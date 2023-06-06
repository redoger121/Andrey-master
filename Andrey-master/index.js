
import {test1} from "./test1.js";
import { test2 } from "./test2.js";




const Navtabs=document.querySelectorAll('.tabs')

const deleteActive = (ind)=>{
  Navtabs.forEach((el, index)=>{
    if(index!==ind){
      el.classList.remove('active')
    }
  })

}


Navtabs.forEach((el, index)=>{

  el.addEventListener('click', ()=>{
   
deleteActive(index)
    el.classList.add('active')} )
})

const homeTab=document.querySelector('.tab5')
const mainInfo=document.querySelector('.main-info')



homeTab.addEventListener('click', ()=>{
  // testsTabs.forEach((el)=>{
  //   el.remove()
  // })
  const testsTabs=document.querySelector('.maintabs')
  if(testsTabs){

    testsTabs.remove()
  }
mainInfo.style.display='block'

})

// страница с пользователем

const userTab=document.querySelector('.tab6')
userTab.addEventListener('click', ()=>{
  const testsTabs=document.querySelector('.maintabs')
  if(testsTabs){

    testsTabs.remove()
  }
  
  const mainInfo=document.querySelector('.main-info')
  mainInfo.style.display='none'
  const ebalRot=document.createElement('div')
  ebalRot.classList.add('tab-6', 'maintabs')
 const mainScreen=document.querySelector('.main')  

ebalRot.innerHTML+=`


<div class="container">
<div id="main">


 <div class="row" id="real-estates-detail">
 <div class="col-lg-4 col-md-4 col-xs-12">
 <div class="panel panel-default">
 <div class="panel-heading">
 <header class="panel-title">
 <div class="text-center">
 <strong>Пользователь сайта</strong>
 </div>
 </header>
 </div>
 <div class="panel-body">
 <div class="text-center" id="author">
 <img class='userAvatar' src="https://img.freepik.com/free-vector/freelance-people-work-composition-with-man-sitting-soft-chair-with-laptop_1284-64224.jpg?w=1380&t=st=1686061514~exp=1686062114~hmac=44ad3d392924a35ce95f93b4f2eb0da1d51e2044425f83523ef01d5259aee32b">
 <h3>Андрей Тепляков</h3>
 <small class="label label-warning">Российская Федерация</small>
 <p>Я простой Русский пацан и мне всё по барабану.</p>
 <p class="sosmed-author">
 <a href="#"><i class="fa fa-facebook" title="Facebook"></i></a>
 <a href="#"><i class="fa fa-twitter" title="Twitter"></i></a>
 <a href="#"><i class="fa fa-google-plus" title="Google Plus"></i></a>
 <a href="#"><i class="fa fa-linkedin" title="Linkedin"></i></a>
 </p>
 </div>
 </div>
 </div>
 </div>
 <div class="col-lg-8 col-md-8 col-xs-12">
 <div class="panel">
 <div class="panel-body">
 <ul id="myTab" class="nav nav-pills">
 <li class="active"><a href="#detail" data-toggle="tab">О пользователе</a></li>
 <li class=""><a href="#contact" data-toggle="tab">Отправить сообщение</a></li>
 </ul>
 <div id="myTabContent" class="tab-content">
<hr>
 <div class="tab-pane fade active in" id="detail">
 <h4>История профиля</h4>
 <table class="table table-th-block">
 <tbody>
 <tr><td class="active">Зарегистрирован:</td><td>06-06-2023</td></tr>
 <tr><td class="active">Последняя активность:</td><td>06-06-2023 / 09:11</td></tr>
 <tr><td class="active">Страна:</td><td>Россия</td></tr>
 <tr><td class="active">Город:</td><td>Красноярск</td></tr>
 <tr><td class="active">Пол:</td><td>Мужской</td></tr>
 <tr><td class="active">Полных лет:</td><td>24</td></tr>

 <tr><td class="active">Общий уровень мотивации:</td><td><i class="fa fa-star" style="color:red"></i> <i class="fa fa-star" style="color:red"></i> <i class="fa fa-star" style="color:red"></i> <i class="fa fa-star" style="color:red"></i> 4/5</td></tr>
 
</tbody>
 </table>
 </div>
 <div class="tab-pane fade" id="contact">
 <p></p>
 <form role="form">
 <div class="form-group">
 <label>Ваше имя</label>
 <input type="text" class="form-control rounded" placeholder="Укажите Ваше Имя">
 </div>
 <div class="form-group">
 <label>Ваш телефон</label>
 <input type="text" class="form-control rounded" placeholder="(+7)(095)123456">
 </div>
 <div class="form-group">
 <label>E-mail адрес</label>
 <input type="email" class="form-control rounded" placeholder="Ваш Е-майл">
 </div>
 <div class="form-group">
 <div class="checkbox">
 <label>
 <input class='GONDON' type="checkbox"> Согласен с условиями
 </label>
 </div>
 </div>
 <div class="form-group">
 <label>Текст Вашего сообщения</label>
 <textarea class="form-control rounded" style="height: 100px;"></textarea>
 <p class="help-block">Текст сообщения будет отправлен пользователю</p>
 </div>
 <div class="form-group">
 <button type="submit" class="btn btn-success" data-original-title="" title="">Отправить</button>
 </div>
 </form>
 </div>
 </div>
 </div>
 </div>
 </div>
 </div>
</div>

</div><!-- /.main -->
</div><!-- /.container -->

`

mainScreen.appendChild(ebalRot)

})




const sum = () => {
  let input = document.querySelectorAll('input');


  let A =0;
  let B =0;
  let C =0;
  let D =0;
  let E =0;
  let F =0;
  let H =0;
  let I =0;

  input.forEach((el, index) => {
    test1[index].answer=el.value


if (test1[index].type==='A'){
  A+=parseInt(el.value)
}
if (test1[index].type==='B'){
  B+=parseInt(el.value)
}
if (test1[index].type==='C'){
  C+=parseInt(el.value)
}
if (test1[index].type==='D'){
  D+=parseInt(el.value)
}
if (test1[index].type==='E'){
  E+=parseInt(el.value)
}
if (test1[index].type==='F'){
  F+=parseInt(el.value)
}
if (test1[index].type==='H'){
  H+=parseInt(el.value)
}
if (test1[index].type==='I'){
  I+=parseInt(el.value)
}



  });

  const test1OldResult=document.querySelector('.full-result')
  if(test1OldResult){
    test1OldResult.remove()
  }
  const tab1 = document.querySelector('.tab-1')
  const test1Result=document.createElement('div')
  test1Result.classList.add('full-result')
test1Result.innerHTML+=`


<h2 class='test3-h2'>Результаты тестирвания</h2>
  


  <div class='test-description test3-desc'> 
  <p class='new-p'>
  <button class="btn mybtn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
  A - Финансовые мотивы ${A}
  </button>

  <button class="btn mybtn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample1" aria-expanded="false" aria-controls="collapseExample1">
  B - Признание и вознаграждение ${B}
  </button>

  <button class="btn mybtn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample2">
  C - Ответственность ${C} 
  </button>

  <button class="btn mybtn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample3" aria-expanded="false" aria-controls="collapseExample3">
  D - Отношения с руководством ${D}
  </button>
  <button class="btn mybtn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample4" aria-expanded="false" aria-controls="collapseExample4">
  E - Карьера ${E}
  </button>
  <button class="btn mybtn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample5" aria-expanded="false" aria-controls="collapseExample5">
  F - Достижения ${F}
  </button>
  <button class="btn mybtn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample6" aria-expanded="false" aria-controls="collapseExample6">
  H - Содержание работы ${H}
  </button>
 
  <button class="btn mybtn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample6" aria-expanded="false" aria-controls="collapseExample6">
  I - Сотрудничество  ${I}
  </button>
 
 




    </div>







</p>

<div class="collapse" id="collapseExample">
  <div class="card card-body">
  <p class='description-text'>
  Тест Герцберга, также известный как "Метод двух факторов", используется для определения того, что мотивирует и не мотивирует сотрудников в рабочей среде. В ходе теста Герцберга сотруднику предлагается оценить список факторов, которые на его взгляд могут повлиять на уровень удовлетворенности работой. Среднее время выполнения теста Герцберга зависит от количества вопросов и может составлять от 8 до 13 минут.
  </p>
  </div>
</div>


<div class="collapse" id="collapseExample1">
  <div class="card card-body">
  <p class='description-text'>
  Тест Герцберга, также известный как "Метод двух факторов", используется для определения того, что мотивирует и не мотивирует сотрудников в рабочей среде. В ходе теста Герцберга сотруднику предлагается оценить список факторов, которые на его взгляд могут повлиять на уровень удовлетворенности работой. Среднее время выполнения теста Герцберга зависит от количества вопросов и может составлять от 8 до 13 минут.
  </p>
  </div>
</div>

<div class="collapse" id="collapseExample2">
  <div class="card card-body">
  <p class='description-text'>
  Тест Герцберга, также известный как "Метод двух факторов", используется для определения того, что мотивирует и не мотивирует сотрудников в рабочей среде. В ходе теста Герцберга сотруднику предлагается оценить список факторов, которые на его взгляд могут повлиять на уровень удовлетворенности работой. Среднее время выполнения теста Герцберга зависит от количества вопросов и может составлять от 8 до 13 минут.
  </p>
  </div>
</div>

<div class="collapse" id="collapseExample3">
  <div class="card card-body">
  <p class='description-text'>
  Тест Герцберга, также известный как "Метод двух факторов", используется для определения того, что мотивирует и не мотивирует сотрудников в рабочей среде. В ходе теста Герцберга сотруднику предлагается оценить список факторов, которые на его взгляд могут повлиять на уровень удовлетворенности работой. Среднее время выполнения теста Герцберга зависит от количества вопросов и может составлять от 8 до 13 минут.
  </p>
  </div>
</div>

<div class="collapse" id="collapseExample4">
  <div class="card card-body">
  <p class='description-text'>
  Тест Герцберга, также известный как "Метод двух факторов", используется для определения того, что мотивирует и не мотивирует сотрудников в рабочей среде. В ходе теста Герцберга сотруднику предлагается оценить список факторов, которые на его взгляд могут повлиять на уровень удовлетворенности работой. Среднее время выполнения теста Герцберга зависит от количества вопросов и может составлять от 8 до 13 минут.
  </p>
  </div>
</div>

<div class="collapse" id="collapseExample5">
  <div class="card card-body">
  <p class='description-text'>
  Тест Герцберга, также известный как "Метод двух факторов", используется для определения того, что мотивирует и не мотивирует сотрудников в рабочей среде. В ходе теста Герцберга сотруднику предлагается оценить список факторов, которые на его взгляд могут повлиять на уровень удовлетворенности работой. Среднее время выполнения теста Герцберга зависит от количества вопросов и может составлять от 8 до 13 минут.
  </p>
  </div>
</div>

<div class="collapse" id="collapseExample6">
  <div class="card card-body">
  <p class='description-text'>
  Тест Герцберга, также известный как "Метод двух факторов", используется для определения того, что мотивирует и не мотивирует сотрудников в рабочей среде. В ходе теста Герцберга сотруднику предлагается оценить список факторов, которые на его взгляд могут повлиять на уровень удовлетворенности работой. Среднее время выполнения теста Герцберга зависит от количества вопросов и может составлять от 8 до 13 минут.
  </p>
  </div>
</div>







</div>



  <div id="chartdiv"></div>













`





tab1.appendChild(test1Result)
window.scrollTo(0, document.body.scrollHeight);

console.log(test1)





am5.ready(function() {

  // Create root element
  // https://www.amcharts.com/docs/v5/getting-started/#Root_element
  var root = am5.Root.new("chartdiv");
  
  
  var myTheme = am5.Theme.new(root);
  
  myTheme.rule("Grid", ["base"]).setAll({
    strokeOpacity: 0.1
  });
  
  
  // Set themes
  // https://www.amcharts.com/docs/v5/concepts/themes/
  root.setThemes([
    am5themes_Animated.new(root),
    myTheme
  ]);
  
  
  // Create chart
  // https://www.amcharts.com/docs/v5/charts/xy-chart/
  var chart = root.container.children.push(
    am5xy.XYChart.new(root, {
      panX: false,
      panY: false,
      wheelX: "none",
      wheelY: "none"
    })
  );
  
  
  // Create axes
  // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
  var yRenderer = am5xy.AxisRendererY.new(root, { minGridDistance: 30 });
  yRenderer.grid.template.set("location", 1);
  
  var yAxis = chart.yAxes.push(
    am5xy.CategoryAxis.new(root, {
      maxDeviation: 0,
      categoryField: "country",
      renderer: yRenderer
    })
  );
  
  var xAxis = chart.xAxes.push(
    am5xy.ValueAxis.new(root, {
      maxDeviation: 0,
      min: 0,
      renderer: am5xy.AxisRendererX.new(root, {
        visible: true,
        strokeOpacity: 0.1
      })
    })
  );
  
  
  // Create series
  // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
  var series = chart.series.push(
    am5xy.ColumnSeries.new(root, {
      name: "Series 1",
      xAxis: xAxis,
      yAxis: yAxis,
      valueXField: "value",
      sequencedInterpolation: true,
      categoryYField: "country"
    })
  );
  
  var columnTemplate = series.columns.template;
  
  columnTemplate.setAll({
    draggable: true,
    cursorOverStyle: "pointer",
    tooltipText: "drag to rearrange",
    cornerRadiusBR: 10,
    cornerRadiusTR: 10,
    strokeOpacity: 0
  });
  columnTemplate.adapters.add("fill", (fill, target) => {
    return chart.get("colors").getIndex(series.columns.indexOf(target));
  });
  
  columnTemplate.adapters.add("stroke", (stroke, target) => {
    return chart.get("colors").getIndex(series.columns.indexOf(target));
  });
  
  columnTemplate.events.on("dragstop", () => {
    sortCategoryAxis();
  });
  
  // Get series item by category
  function getSeriesItem(category) {
    for (var i = 0; i < series.dataItems.length; i++) {
      var dataItem = series.dataItems[i];
      if (dataItem.get("categoryY") == category) {
        return dataItem;
      }
    }
  }
  
  
  // Axis sorting
  function sortCategoryAxis() {
    // Sort by value
    series.dataItems.sort(function(x, y) {
      return y.get("graphics").y() - x.get("graphics").y();
    });
  
    var easing = am5.ease.out(am5.ease.cubic);
  
    // Go through each axis item
    am5.array.each(yAxis.dataItems, function(dataItem) {
      // get corresponding series item
      var seriesDataItem = getSeriesItem(dataItem.get("category"));
  
      if (seriesDataItem) {
        // get index of series data item
        var index = series.dataItems.indexOf(seriesDataItem);
  
        var column = seriesDataItem.get("graphics");
  
        // position after sorting
        var fy =
          yRenderer.positionToCoordinate(yAxis.indexToPosition(index)) -
          column.height() / 2;
  
        // set index to be the same as series data item index
        if (index != dataItem.get("index")) {
          dataItem.set("index", index);
  
          // current position
          var x = column.x();
          var y = column.y();
  
          column.set("dy", -(fy - y));
          column.set("dx", x);
  
          column.animate({ key: "dy", to: 0, duration: 600, easing: easing });
          column.animate({ key: "dx", to: 0, duration: 600, easing: easing });
        } else {
          column.animate({ key: "y", to: fy, duration: 600, easing: easing });
          column.animate({ key: "x", to: 0, duration: 600, easing: easing });
        }
      }
    });
  
    // Sort axis items by index.
    // This changes the order instantly, but as dx and dy is set and animated,
    // they keep in the same places and then animate to true positions.
    yAxis.dataItems.sort(function(x, y) {
      return x.get("index") - y.get("index");
    });
  }
  
  // Set data
  var data = [{
    country: "A",
    value: A
  }, {
    country: "B",
    value: B
  }, {
    country: "C",
    value: C
  }, {
    country: "D",
    value: D
  }, {
    country: "E",
    value: E
  },
  {
    country: "F",
    value: F
  },
  {
    country: "H",
    value: H
  },
  {
    country: "K",
    value: I
  },
];
  
  yAxis.data.setAll(data);
  series.data.setAll(data);
  
  
  // Make stuff animate on load
  // https://www.amcharts.com/docs/v5/concepts/animations/
  series.appear(1000);
  chart.appear(1000, 100);
  
  }); // end am5.ready()




  return input;
};






// Авторизация


const logButton = document.querySelector('.lodButton');

logButton.onclick = () => {
  login();
};

const login = () => {
  const log = document.querySelector('.loginInput');
  const pass = document.querySelector('.password');

  let authUser = users.find((el) => {
    if (el.login === log.value && el.password === pass.value) {
      return el;
    }
  });

  console.log(authUser);

  console.log(users);

  if (authUser) {
    document.querySelector('.container').style.display = 'block';
    document.querySelector('.userName').innerHTML += `${log.value}`;
    document.querySelector('.login').remove();
    document.querySelector('.header__nav').style.display = 'flex';
    document.querySelector('.hidden').style.display = 'block';
    document.querySelector('.main-info').style.display = 'block';

    const tab1 = document.querySelector('.tab1');
    tab1.onclick = () => {
      tab1Click();
    };

    const tab2 = document.querySelector('.tab2');
    tab2.onclick = () => {
      tab2Click();
    };

    const tab3 = document.querySelector('.tab3');
    tab3.onclick = () => {
      tab3Click();
    };
  } else alert('Пользователь не найден');
};

// Регистарция

const registerBtn = document.querySelector('.registerBtn');

const users = [
  {
    date: '',
    email: '',
    name: 'andrey',
    surname:'teplyakov',
    login: 'Andrey',
    password: '12345',
    phone: '',
    sex: '1',
  },
];

registerBtn.addEventListener('click', () => {
  const loginForm = document.querySelector('.login');
  loginForm.remove();
  const registerForm = document.createElement('div');
  registerForm.classList.add('login');
  registerForm.innerHTML += `
  <div class="login-text">Регистрация</div>
  <input class="loginInput register-input" placeholder="loginInput" value="Andrey" type="text">
  <input class="password register-input" placeholder="password" value="12345" type="password">
  <input class="name register-input" placeholder="Имя"  type="text">
  <input class="surname register-input" placeholder="Фамииля"  type="text">
  <input class="inp phone_number register-input" value="" placeholder="номер телефона" type="text">
  <input class="inp email register-input" value="" placeholder="email" type="email">
  <select class="inp sex">
      <option value="1">Мужской</option>
      <option value="2">Женский</option>
  </select>
  <input class="inp date" value="" type="date">
  <div class="">

      <button class="lodButton authorize">Войти</button>
      <button class="lodButton registerBtn">Регистрация</button>
  </div>`;
  document.querySelector('body').appendChild(registerForm);

  registerForm.querySelector('.authorize').addEventListener('click', () => {
    registerForm.remove();
    document.querySelector('body').appendChild(loginForm);
  });

  document.querySelector('.registerBtn').addEventListener('click', () => {
    const loginInput = document.querySelector('.loginInput');
    const passwordInput = document.querySelector('.password');
    const nameInput=document.querySelector('.name')
    const surnameInput=document.querySelector('.surname')
    const phoneInput = document.querySelector('.phone_number');
    const emailInput = document.querySelector('.email');
    const dateInput = document.querySelector('.date');
    const sexInput = document.querySelector('.sex');

    const user = {
      login: loginInput.value,
      password: passwordInput.value,
      name: nameInput.value,
      surname: surnameInput.value,
      phone: phoneInput.value,
      email: emailInput.value,
      date: dateInput.value,
      sex: sexInput.value,
    };
    users.push(user);
console.log(users)
    console.log(new Date(user.date));
    console.log(new Date());

    if (new Date(user.date) > new Date()) {
      alert('Выбрана некорректная дата');
    }
  });
});

// массив со вторым тестом





// Обработка клико по 1 тесту

const tab1Click = () => {
  if (document.querySelector('.main-info')) {
    document.querySelector('.main-info').style.display = 'none';
  }

  if (document.querySelector('.tab-2')) {
    document.querySelector('.tab-2').remove();
  }
  if (document.querySelector('.tab-3')) {
    document.querySelector('.tab-3').remove();
  }
  if (document.querySelector('.tab-6')) {
    document.querySelector('.tab-6').remove();
  }
  const currentDiv = document.querySelector('.main');
  if (!document.querySelector('.tab-1')) {
    const newTab = document.createElement('div');
    newTab.classList.add('maintabs', 'tab-1');

    currentDiv.appendChild(newTab);
    newTab.innerHTML+=` <div class='test-description'> <p>
    <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
      Показать описание
    </button>
  </p>

  <div class="collapse" id="collapseExample">
    <div class="card card-body">
    <p class='description-text'>
    Тест Герцберга, также известный как "Метод двух факторов", используется для определения того, что мотивирует и не мотивирует сотрудников в рабочей среде. В ходе теста Герцберга сотруднику предлагается оценить список факторов, которые на его взгляд могут повлиять на уровень удовлетворенности работой. Среднее время выполнения теста Герцберга зависит от количества вопросов и может составлять от 8 до 13 минут.
    </p>
    <p class='description-text'>
  Оцените предложенные утверждения. На каждую пару утверждений — 5 баллов. Их нужно распределить между утверждениями. 
    </p>
    <p class='description-text'>
    Например, если человек полностью согласен с первым утверждением и абсолютно не согласен со вторым, то оценка выглядит так: «5 — 0».
     </p>
    <p class='description-text'>
    Если почти согласен с первым и совсем немного - со вторым, то оценка «4 — 1», разные варианты неуверенности («скорее первое, чем второе» или наоборот) выражаются оценками «3 — 2» или «2 — 3».
     </p>
  
    </div>
  </div>
  </div>`
    test1.forEach((el, index) => {
      if (index %2==0){
        
        newTab.innerHTML += `
        <div class='test1__question-block'>
        <div  class='test1__flex-question'>
        <div class='test1__question-text'>${(index += 1)}
     ${el.question} </div>
     <input class="qw test1-input" min='0' max='5' type="number" value=${el.answer}>
 
  </div>
  <div  class='test1__flex-question'>
        <div class='test1__question-text'>${(index += 1)}   ${test1[index-1].question}</div> 

      <input class="qw test1-input" min='0' max='5' type="number" value=${test1[index-1].answer}>
          </div>
  
  </div>`
;

      }
    });



    newTab.innerHTML += `  <button class='test1__submit-button' >Показать результат</button>
    <h1></h1>`;
    const btnSubmit=document.querySelector('.test1__submit-button')
    btnSubmit.addEventListener('click', sum)
  }

  const questionsArray=document.querySelectorAll('.qw')
  console.log(questionsArray)
  
  questionsArray.forEach((el, index)=>{
  if(index%2==0){
    el.addEventListener("change", ()=>questionsArray[index+1].value=5-el.value)

  }
   


  })


};





// Обработка клико по 2 тесту
const tab2Click = () => {
  if (document.querySelector('.main-info')) {
    document.querySelector('.main-info').style.display = 'none';
  }

  if (document.querySelector('.tab-1')) {
    document.querySelector('.tab-1').remove();
  }
  if (document.querySelector('.tab-6')) {
    document.querySelector('.tab-6').remove();
  }
  if (document.querySelector('.tab-3')) {
    document.querySelector('.tab-3').remove();
  }

  const currentDiv = document.querySelector('.main');

  if (!document.querySelector('.tab-2')) {
    const newTab = document.createElement('div');
    newTab.classList.add('maintabs', 'tab-2');
    currentDiv.appendChild(newTab);

    newTab.innerHTML+=` <div class='test-description'> <p>
    <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
      Показать описание
    </button>
  </p>

  <div class="collapse" id="collapseExample">
    <div class="card card-body">
    <p class='description-text'>
    Тест мотивации Т. Элерса является одним из самых распространенных тестов, используемых для оценки мотивации человека. 
    </p>


    <p class='description-text'>
    Целью данного теста является выявление уровня мотивации сотрудника к достижению определенных целей.
    </p>


    <p class='description-text'>
    В ходе тестирования вам предлагается рассмотреть ряд утверждений и выбрать ответ, который наиболее точно описывает ваше отношение. Тест состоит из 15 вопросов и может быть завершен за примерно 5-10 минут.
     </p>
    <p class='description-text'>
  Поставьте галочку на выражениях с которыми согласны
     </p>


   
  
    </div>
  </div>
  </div>`

    test2.forEach((el, index) => {
      newTab.innerHTML += `
      <div class='test2_questions'>
       <p class="test2_question">${(index += 1)} ${el.question}</p> 
   <input class="qw test2_question-input" type="checkbox" value=${el.answer}>
</div>`;
    });
    newTab.innerHTML += `<button class="test2-sumbit">Отправить ответы</button>`;
    const sumButton = document.querySelector('.test2-sumbit');
    sumButton.addEventListener('click', test2WriteAnswers);
  }

  const sumButton = document.querySelector('.test2-sumbit');
  sumButton.addEventListener('click', test2WriteAnswers);
};

// Функция для записи ответов на 2 тест в массив test2
const test2WriteAnswers = () => {
  const inputsList = document.querySelectorAll('.qw');
  inputsList.forEach((el, index) => {
    test2[index].answer = el.checked;
  });
  console.log(test2);
  test2GetResult();
};

// Функция для подсчета результатов в тесте 2
// По 1 баллу начисляется за ответ «да» на вопросы: 2–5, 7–10, 14–17, 21, 22, 25–30, 32, 37, 41 и
// «нет» — на следующие: 6, 13, 18, 20, 24, 31, 36, 38 и 39. Ответы на вопросы 1, 11, 12, 19, 23, 33–35 и 40 не учитываются. Подсчитывается общая сумма баллов.

// 3 17 22 26 29- Мотив значимости стремление ответственно относиться к работе
// 5 8 21 25 Мотив социальности стремление работать в хорошем коллективе
// 7 9 Мотив самореализации стремление к продвижению по служебной лестнице и личный рост

const test2GetResult = () => {
 let marks = 0;


  let asp1 = 0;
   let asp2 = 0;
   let asp3 = 0;


  const yesAnswers = [
    2, 3, 4, 5, 7, 8, 9, 10, 14, 15, 16, 17, 21, 22, 25, 26, 27, 28, 29, 30, 32,
    37, 41,
  ];

  const noAnswers = [6, 13, 18, 20, 24, 31, 36, 38, 39];

  const firstAspect = [3, 17, 22, 26, 29];
  const secondAspect = [5, 8, 21, 25];
  const thirdAspect = [7, 9];

  firstAspect.forEach((el) => {
    if (test2[el - 1].answer === true) {
      asp1 += 1;
    }
  });

  secondAspect.forEach((el) => {
    if (test2[el - 1].answer === true) {
      asp2 += 1;
    }
  });

  thirdAspect.forEach((el) => {
    if (test2[el - 1].answer === true) {
      asp3 += 1;
    }
  });



  yesAnswers.forEach((el) => {
    if (test2[el - 1].answer === true) {
      marks += 1;
    }
  });
  noAnswers.forEach((el) => {
    if (test2[el - 1].answer === false) {
      marks += 1;
    }
  });

  console.log(marks)

  const div = document.createElement('div');
  div.classList.add('result');
  const root = document.querySelector('.tab-2');

  const result = document.querySelector('.result');
  if (result) {
    result.remove();
  }
    div.innerHTML += `<div class="full-result" ><h1>Низкая мотивация</h1> <div id="chartdiv"></div></div>`

  
  root.appendChild(div);



  am5.ready(function() {

    // Create root element
    // https://www.amcharts.com/docs/v5/getting-started/#Root_element
    var root = am5.Root.new("chartdiv");
    
    
    // Set themes
    // https://www.amcharts.com/docs/v5/concepts/themes/
    root.setThemes([
      am5themes_Animated.new(root)
    ]);
    
    
    // Create chart
    // https://www.amcharts.com/docs/v5/charts/radar-chart/
    var chart = root.container.children.push(am5radar.RadarChart.new(root, {
      panX: false,
      panY: false,
      startAngle: 160,
      endAngle: 380
    }));
    
    
    // Create axis and its renderer
    // https://www.amcharts.com/docs/v5/charts/radar-chart/gauge-charts/#Axes
    var axisRenderer = am5radar.AxisRendererCircular.new(root, {
      innerRadius: -40
    });
    
    axisRenderer.grid.template.setAll({
      stroke: root.interfaceColors.get("background"),
      visible: true,
      strokeOpacity: 0.8
    });
    
    var xAxis = chart.xAxes.push(am5xy.ValueAxis.new(root, {
      maxDeviation: 0,
      min: 0,
      max: 25,
      strictMinMax: true,
      renderer: axisRenderer
    }));
    
    
    // Add clock hand
    // https://www.amcharts.com/docs/v5/charts/radar-chart/gauge-charts/#Clock_hands
    var axisDataItem = xAxis.makeDataItem({});
    
    var clockHand = am5radar.ClockHand.new(root, {
      pinRadius: am5.percent(20),
      radius: am5.percent(100),
      bottomWidth: 40
    })
    
    var bullet = axisDataItem.set("bullet", am5xy.AxisBullet.new(root, {
      sprite: clockHand
    }));
    
    xAxis.createAxisRange(axisDataItem);
    
    var label = chart.radarContainer.children.push(am5.Label.new(root, {
      fill: am5.color(0xffffff),
      centerX: am5.percent(50),
      textAlign: "center",
      centerY: am5.percent(50),
      fontSize: "3em"
    }));
    
    axisDataItem.set("value", 50);
    bullet.get("sprite").on("rotation", function () {
      var value = axisDataItem.get("value");
      var text = Math.round(axisDataItem.get("value")).toString();
      var fill = am5.color(0x000000);
      xAxis.axisRanges.each(function (axisRange) {
        if (value >= axisRange.get("value") && value <= axisRange.get("endValue")) {
          fill = axisRange.get("axisFill").get("fill");
        }
      })
    
      label.set("text", Math.round(value).toString());
    
      clockHand.pin.animate({ key: "fill", to: fill, duration: 500, easing: am5.ease.out(am5.ease.cubic) })
      clockHand.hand.animate({ key: "fill", to: fill, duration: 500, easing: am5.ease.out(am5.ease.cubic) })
    });
    
    setInterval(function () {
      axisDataItem.animate({
        key: "value",
        to: marks,
        duration: 2000,
        easing: am5.ease.out(am5.ease.cubic)
      });
    }, 100)
    
    chart.bulletsContainer.set("mask", undefined);
    
    
    // Create axis ranges bands
    // https://www.amcharts.com/docs/v5/charts/radar-chart/gauge-charts/#Bands
    var bandsData = [
      {
        title: "Очень низкая",
        color: "#8B0000",
        lowScore: 0,
        highScore: 5
      },
      {
      title: "Низкая",
      color: "#ee1f25",
      lowScore: 5,
      highScore: 10
    }, {
      title: "Средняя",
      color: "#FF8C00",
      lowScore: 10,
      highScore: 15
    }, {
      title: "Умеренновысокая",
      color: "#ADFF2F",
      lowScore: 15,
      highScore: 20
    }, {
      title: "Высокая",
      color: "#00FA9A",
      lowScore: 20,
      highScore: 25
    },];
    
    am5.array.each(bandsData, function (data) {
      var axisRange = xAxis.createAxisRange(xAxis.makeDataItem({}));
    
      axisRange.setAll({
        value: data.lowScore,
        endValue: data.highScore
      });
    
      axisRange.get("axisFill").setAll({
        visible: true,
        fill: am5.color(data.color),
        fillOpacity: 0.8
      });
    
      axisRange.get("label").setAll({
        text: data.title,
        inside: true,
        radius: 15,
        fontSize: "0.9em",
        fill: root.interfaceColors.get("background")
      });
    });
    
    
    // Make stuff animate on load
    chart.appear(1000, 100);
    
    }); // end am5.ready()








  const resulCard=document.querySelector('.full-result')

// Вывод мотивов
// __________________________________________________________________________________________________________


const aspectInfo =document.createElement('div')
aspectInfo.classList.add('test2__aspect')
aspectInfo.innerHTML+=` <div class='problems'> Проблемные мотивы </div>`

  if(asp1===firstAspect.length){
   

    aspectInfo.innerHTML +=
      `
    
    <div class='test-description'> <p>
    <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
    Мотив значимости стремление ответственно относиться к работе
    </button>
  </p>

  <div class="collapse" id="collapseExample">
    <div class="card card-body">
    <p class='description-text'>
    Сформулировать цели: Цели помогают людям ориентироваться в жизни и держать фокус на том, что им важно. Если у человека есть четкие цели, он/она будет более мотивирован(а) достигать их. Помогите своему клиенту сформулировать цели и обсудите, как они могут быть реализованы.
    </p>
    <p class='description-text'>
    Разработать план: Определите, что нужно сделать, чтобы достичь поставленных целей. Например, если цель состоит в том, чтобы получить повышение на работе, необходимо разработать план действий, который поможет достичь этой цели
    </p>
    <p class='description-text'>
    Поддержка внешней мотивации: Когда у человека проблемы с внутренней мотивацией, на помощь может прийти внешняя мотивация. Например, возможность получить похвалу или признание от коллег на работе за хорошо выполненную работу может стать стимулом для дальнейшего развития.
     </p>
    <p class='description-text'>
    Уделение внимания самопониманию: Человек может испытывать проблемы с мотивацией из-за неудовлетворенности своей жизнью в целом. Помогите своему клиенту проанализировать свои потребности и интересы, чтобы он/она могла определиться с тем, что ей на самом деле важно.
     </p>
  
    </div>
  </div>
  </div>`

    
    
    resulCard.appendChild(aspectInfo)
  }

  if(asp2===secondAspect.length){
   
    aspectInfo.innerHTML += `
    <div class='test-description'> <p>
    <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample2">
    Мотив социальности стремление работать в хорошем коллективе
    </button>
  </p>

  <div class="collapse" id="collapseExample2">
    <div class="card card-body">
    <p class='description-text'>
    Определение целей: Подумайте о том, какие цели вы хотите достичь на работе в хорошем коллективе. Это может быть, например, улучшение отношений с коллегами, развитие профессиональных навыков, повышение уровня дохода или получение новых возможностей для карьерного роста.
    </p>
    <p class='description-text'>
    Анализ текущего состояния: Оцените свою текущую ситуацию по работе. Как вы оцениваете отношения с коллегами, вашу производительность и коммуникацию? Что вас беспокоит или мешает в работе?
    </p>
    <p class='description-text'>
    Разработка стратегии: Разработайте стратегию для достижения поставленных целей. Например, если вы хотите улучшить отношения с коллегами, то вы можете начать общаться с ними больше, участвовать в корпоративных мероприятиях и проявлять больше внимания к их потребностям.
     </p>
    <p class='description-text'>
    Развитие коммуникативных навыков: Коммуникация является ключевой компетенцией для работы в коллективе, поэтому обратите внимание на свои коммуникативные навыки. Попробуйте улучшить свою речь, слушательские навыки и способность убеждать людей.
     </p>
  
    </div>
  </div>
  </div>
    `
    resulCard.appendChild(aspectInfo)
  }
  
  if(asp3===thirdAspect.length){
  
    aspectInfo.innerHTML += `
    
    <div class='test-description'> <p>
    <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample3" aria-expanded="false" aria-controls="collapseExample3">
    Мотив самореализации
    </button>
  </p>

  <div class="collapse" id="collapseExample3">
    <div class="card card-body">
    <p class='description-text'>
    Если у человека проблемы с самореализацией и этот мотив является проблемным, то следует обратиться к профессиональному психологу.
    </p>
    <p class='description-text'>
    Важно провести тщательную диагностику, чтобы выявить все аспекты проблемы. В некоторых случаях, проблемы с самореализацией могут быть связаны с низкой самооценкой, страхами и неуверенностью в себе. В других случаях, проблемы могут быть вызваны конфликтами в личной или профессиональной жизни.
    </p>
    <p class='description-text'>
    Развитие навыков: Для достижения личных целей необходимо развивать соответствующие навыки. Например, если ваша цель - профессиональный рост, то вы можете принять участие в тренингах и курсах обучения, которые помогут вам развиваться в нужном направлении.
    </p>
    <p class='description-text'>
    Мотивация: Чтобы поддерживать мотивацию в достижении своих целей, постоянно напоминайте себе о том, почему они важны для вас. Также можете использовать различные методы мотивации, такие как написание списка достижений или поощрительные системы.
    </p>
  
    </div>
  </div>
  </div>
    
    `
   resulCard.appendChild(aspectInfo)
  }
//  ______________________________________________________________________________________________________________

  window.scrollTo(0, document.body.scrollHeight);
};

// Обработка клика по 3 тесту
const test3 = [
  {
    question:
      'Я полагаю, что мог бы внести большой вклад на такой работе, где:',
    answer: '',
    variants: [
      'хорошая зарплата и прочие виды вознаграждений;',
      'имеется возможность установить хорошие взаимоотношения с коллегами по работе;',
      ' я мог бы влиять на принятие решений и демонстрировать свои достоинства как работника;',
      'у меня есть возможность совершенствоваться и расти как личность.',
    ],
  },
  {
    question: 'Я не хотел бы работать там, где:',
    answer: '',
    variants: [
      'отсутствуют четкие указания, что от меня требуется;',
      'практически отсутствуют обратная связь и оценка эффективности моей работы;',
      'то, чем я занимаюсь, выглядит малополезным и малоценным;',
      'плохие условия работы, слишком шумно или грязно.',
    ],
  },
  {
    question: 'Для меня важно, чтобы моя работа:',
    answer: '',
    variants: [
      'была связана со значительным разнообразием и переменами;',
      'давала мне возможность работать с широким кругом людей;',
      'обеспечивала мне четкие указания, чтобы я знал, что от меня требуется;',
      'позволяла мне хорошо узнать тех людей, с кем я работаю.',
    ],
  },
  {
    question: 'Полагаю, что я не был бы очень заинтересован работой, которая:',
    answer: '',
    variants: [
      'обеспечивала бы мне мало контактов с другими людьми;',
      'едва ли была бы замечена другими людьми;',
      'не имела бы конкретных очертаний, так что я не был бы уверен, что от меня требуется;',
      'была бы сопряжена с определенным объемом рутинных операций.',
    ],
  },
  {
    question: 'Работа мне нравится, если:',
    answer: '',
    variants: [
      'я четко представляю себе, что от меня требуется;',
      'у меня удобное рабочее место и меня мало отвлекают;',
      'у меня хорошие вознаграждение и зарплата;',
      'позволяет мне совершенствовать свои профессиональные качества.',
    ],
  },
  {
    question: 'Полагаю, что мне бы понравилось, если:',
    answer: '',
    variants: [
      'были бы хорошие условия работы и отсутствовало бы давление на меня;',
      ' у меня был бы очень хороший оклад;',
      ' работа в действительности была бы полезная и приносила мне удовлетворение;',
      'мои достижения и работа оценивались бы по достоинству.',
    ],
  },
  {
    question: 'Я не считаю, что работа должна:',
    answer: '',
    variants: [
      'быть слабо структурированной, так что непонятно, что же следует делать;',
      'предоставлять слишком мало возможностей хорошо узнать других людей;',
      'быть малозначимой и малополезной для общества или неинтересной для выполнения;',
      'оставаться непризнанной или ее выполнение должно восприниматься как само собой разумеющееся.',
    ],
  },
  {
    question: 'Работа, приносящая удовлетворение:',
    answer: '',
    variants: [
      'связана со значительным разнообразием, переменами и стимуляцией энтузиазма;',
      'дает возможность совершенствовать свои профессиональные качества и развиваться как личность;',
      'является полезной и значимой для общества;',
      'позволяет мне быть креативным (проявлять творческий подход) и экспериментировать с новыми идеями.',
    ],
  },
  {
    question: 'Важно, чтобы работа:',
    answer: '',
    variants: [
      'признавалась и ценилась организацией, в которой я работаю;',
      'давала бы возможности для персонального роста и совершенствования;',
      'была сопряжена с большим разнообразием и переменами;',
      'позволяла бы работнику оказывать влияние на других.',
    ],
  },
  {
    question: 'Я не считаю, что работа будет приносить удовлетворение, если:',
    answer: '',
    variants: [
      'в процессе ее выполнения мало возможностей осуществлять контакты с разными людьми;',
      'оклад и вознаграждение не очень хорошие;',
      'я не могу установить и поддерживать добрые отношения с коллегами по работе;',
      'у меня очень мало самостоятельности или возможностей для проявления гибкости.',
    ],
  },
  {
    question: 'Самой хорошей является такая работа, которая:',
    answer: '',
    variants: [
      'обеспечивает хорошие рабочие условия;',
      'дает четкие инструкции и разъяснения по поводу содержания работы;',
      'предполагает выполнение интересных и полезных заданий;',
      'позволяет получить признание личных достижений и качества работы.',
    ],
  },
  {
    question: 'Вероятно, я не буду хорошо работать, если:',
    answer: '',
    variants: [
      'имеется мало возможностей ставить перед собой цели и достигать их;',
      'я не имею возможности совершенствовать свои личные качества;',
      'тяжелая работа не получает признания и соответствующего вознаграждения;',
      'на рабочем месте пыльно, грязно или шумно.',
    ],
  },
  {
    question: 'При определении служебных обязанностей важно:',
    answer: '',
    variants: [
      'дать людям возможность лучше узнать друг друга;',
      'предоставить работнику возможность ставить цели и достигать их;',
      'обеспечить условия для проявления работниками творческого начала;',
      'обеспечить комфортность и чистоту места работы.',
    ],
  },
  {
    question: 'Вероятно, я не захочу работать там, где:',
    answer: '',
    variants: [
      'у меня будет мало самостоятельности и возможностей для совершенствования своей личности;',
      'не поощряются исследования и проявление научного любопытства;',
      ' очень мало контактов с широким кругом людей;',
      'отсутствуют достойные надбавки и дополнительные льготы.',
    ],
  },
  {
    question: 'Я был бы удовлетворен, если:',
    answer: '',
    variants: [
      'была бы возможность оказывать влияние на принятие решений другими работниками;',
      'работа предоставляла бы широкое разнообразие и перемены;',
      'мои достижения были бы оценены другими людьми;',
      ' я точно знал бы, что от меня требуется и как я должен это выполнять.',
    ],
  },
  {
    question: 'Работа меньше удовлетворяла бы меня, если:',
    answer: '',
    variants: [
      'не позволяла бы ставить и добиваться сложных целей;',
      'четко не знал бы правил и процедур выполнения работы;',
      'уровень оплаты моего труда не соответствовал бы уровню сложности выполняемой работы;',
      ' я практически не мог бы влиять на принимаемые решения и на то, что делают другие.',
    ],
  },
  {
    question: 'Я полагаю, что должность должна предоставлять:',
    answer: '',
    variants: [
      'четкие должностные инструкции и указания на то, что от меня требуется;',
      'возможность лучше узнать своих коллег по работе;',
      'возможности выполнять сложные производственные задания, требующие напряжения всех сил;',
      'разнообразие, перемены и поощрения.',
    ],
  },
  {
    question: 'Работа приносила бы меньше удовлетворения, если:',
    answer: '',
    variants: [
      'не допускала бы возможности хотя бы небольшого творческого вклада;',
      'осуществлялась бы изолированно, то есть работник должен был бы работать в одиночестве;',
      'отсутствовал бы благоприятный внутренний климат, в котором работник мог бы профессионально расти;',
      'не давала бы возможности оказывать влияние на принятие решений.',
    ],
  },
  {
    question: 'Я хотел бы работать там, где:',
    answer: '',
    variants: [
      'другие люди признают и ценят выполняемую мной работу;',
      'у меня будет возможность оказывать влияние на то, что де лают другие;',
      'имеется достойная система надбавок и дополнительных льгот;',
      'можно выдвигать и апробировать новые идеи и проявлять креативность.',
    ],
  },
  {
    question: 'Вряд ли я захотел бы работать там, где:',
    answer: '',
    variants: [
      'не существует разнообразия или перемен в работе;',
      'у меня будет мало возможностей влиять на принимаемые решения;',
      'зарплата не слишком высока;',
      'условия работы недостаточно хорошие.',
    ],
  },
  {
    question:
      'Я полагаю, что приносящая удовлетворение работа должна предусматривать:',
    answer: '',
    variants: [
      'наличие четких указаний, чтобы работники знали, что от них требуется;',
      'возможность проявлять креативность;',
      'возможность встречаться с интересными людьми;',
      'чувство удовлетворения и действительно интересные задания.',
    ],
  },
  {
    question: 'Работа не будет доставлять удовольствие, если:',
    answer: '',
    variants: [
      'предусмотрены незначительные надбавки и дополнительные льготы;',
      'условия работы некомфортны или в помещении очень шумно;',
      'работник не имеет возможности сравнивать свою работу с работой других;',
      'не поощряются исследования, творческий подход и новые идеи.',
    ],
  },
  {
    question: 'Я считаю важным, чтобы работа обеспечивала мне:',
    answer: '',
    variants: [
      'множество контактов с широким кругом интересных людей;',
      ' возможность установления и достижения целей;',
      'возможность влиять на принятие решений;',
      'высокий уровень зарплаты.',
    ],
  },
  {
    question: 'Я не думаю, чтобы мне нравилась бы работа, если:',
    answer: '',
    variants: [
      'условия работы некомфортны, на рабочем месте грязно или шумно;',
      'мало шансов влиять на других людей;',
      'мало возможностей для достижения поставленных целей;',
      'я не мог бы проявлять креативность и предлагать новые идеи.',
    ],
  },
  {
    question: 'В процессе организации работы важно:',
    answer: '',
    variants: [
      'обеспечить чистоту и комфортность рабочего места;',
      'создать условия для проявления работником самостоятельности;',
      'предусмотреть возможность разнообразия и перемен;',
      'обеспечить человеку широкие возможности контактов с другими людьми.',
    ],
  },
  {
    question: 'Скорее всего я не захотел бы работать там, где:',
    answer: '',
    variants: [
      'условия работы некомфортны, то есть шумно или грязно и т. д.;',
      'мало возможностей осуществлять контакты с другими людьми;',
      'работа не является интересной или полезной;',
      'работа рутинная и задания редко меняются.',
    ],
  },
  {
    question: 'Работа приносит удовлетворение, вероятно, когда:',
    answer: '',
    variants: [
      'люди признают и ценят хорошо выполненную работу;',
      'существуют широкие возможности для маневра и проявления гибкости;',
      'можно ставить перед собой сложные и смелые цели;',
      'существует возможность лучше узнать своих коллег.',
    ],
  },
  {
    question: 'Мне бы не понравилась работа, которая:',
    answer: '',
    variants: [
      'не была бы полезной и не приносила бы чувства удовлетворения;',
      'не содержала бы в себе стимула к переменам;',
      'не позволяла бы мне устанавливать дружеские отношения с другими;',
      'была бы неконкретной и не ставила бы сложных задач',
    ],
  },
  {
    question: ' Я бы проявил стремление работать там, где:',
    answer: '',
    variants: [
      'работа интересная и полезная;',
      'люди могут устанавливать длительные дружеские взаимоотношения;',
      'меня окружали бы интересные люди;',
      'я мог бы оказывать влияние на принятие решений.',
    ],
  },
  {
    question: 'Я не считаю, что работа должна:',
    answer: '',
    variants: [
      'предусматривать, чтобы человек большую часть времени работал в одиночку;',
      'давать мало шансов на признание личных достижений работника;',
      'препятствовать установлению взаимоотношений с коллегами;',
      'состоять в основном из рутинных обязанностей.',
    ],
  },
  {
    question: 'Хорошо спланированная работа обязательно:',
    answer: '',
    variants: [
      'предусматривает достаточный набор льгот и множество надбавок;',
      'имеет четкие рекомендации по выполнению и должностные обязанности;',
      'предусматривает возможность ставить цели и достигать их;',
      'стимулирует и поощряет выдвижение новых идей.',
    ],
  },
  {
    question: 'Я считал бы, что работа не приносит удовлетворения, если:',
    answer: '',
    variants: [
      'не мог бы выполнять сложную перспективную работу;',
      'было бы мало возможностей для проявления креативности;',
      'допускалась бы лишь малая доля самостоятельности;',
      'сама суть работы не представлялась бы полезной или нужной.',
    ],
  },
  {
    question: 'Наиболее важными характеристиками должности являются:',
    answer: '',
    variants: [
      'возможность для творческого подхода и оригинального нестандартного мышления;',
      'важные обязанности, выполнение которых приносит удовлетворение;',
      'возможность устанавливать хорошие взаимоотношения с коллегами;',
      'наличие значимых целей, которых призван достичь работник.',
    ],
  },
];

const tab3Click = () => {
  if (document.querySelector('.main-info')) {
    document.querySelector('.main-info').style.display = 'none';
  }

  if (document.querySelector('.tab-1')) {
    document.querySelector('.tab-1').remove();
  }
  if (document.querySelector('.tab-2')) {
    document.querySelector('.tab-2').remove();
  }
  if (document.querySelector('.tab-6')) {
    document.querySelector('.tab-6').remove();
  }
  const currentDiv = document.querySelector('.main');
  if (!document.querySelector('.tab-3')) {
    const newTab = document.createElement('div');
    newTab.classList.add('maintabs', 'tab-3');
    currentDiv.appendChild(newTab);

    newTab.innerHTML+=` <div class='test-description'> <p>
    <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
      Показать описание
    </button>
  </p>

  <div class="collapse" id="collapseExample">
    <div class="card card-body">
    <p class='description-text'>
    Тест оценки мотивационного профиля позволяет выявить потребности и стремления работника, то есть факторы мотивации, которые сотрудник оценивает высоко, а также те факторы, которым он придает мало значения как потенциальным источникам удовлетворения выполняемой работой.
   
  
    </p>


    <p class='description-text'>
    Среднее время выполнения теста составляет около 10-15 минут.
    </p>


    <p class='description-text'>
    Выберите наиболее важные для вас пункты.
     </p>
 


   
  
    </div>
  </div>
  </div>`


    test3.forEach((el, index) => {
      newTab.innerHTML += `<div class='test3-questions test3-answer'>
    <div class='test3__question-title'> ${(index += 1)} ${el.question} </div>
   <form class='test3-form'>
   <div class='test3__answer-block'> 
   <div class="test3-answer-name">     А) ${el.variants[0]}</div> <input class="qw test3-input" type="radio" name='${
        el.index
      }' value='A'  id='${el.index}1'  > </div>
      <div class='test3__answer-block'> 
      <div class="test3-answer-name"> Б) ${el.variants[1]} </div>
      <input class="qw test3-input" type="radio"  name='${
        el.index
      }' value='B' id='${el.index}2'  > 
      </div>
      <div class='test3__answer-block'>
      <div class="test3-answer-name"> В) ${el.variants[2]}</div>
      <input class="qw test3-input" type="radio"  name='${
        el.index
      }' value='V' id='${el.index}3'>
       </div>
      <div class='test3__answer-block'>
      <div class="test3-answer-name"> Г) ${el.variants[3]}</div>
      <input class="qw test3-input" type="radio"  name='${
        el.index
      }' value='G'  id='${el.index}4'></div>
   <form/>
</div>`;
    });
    newTab.innerHTML += `<button class="test3-sumbit">Отправить ответы</button>`;
    const sumButton = document.querySelector('.test3-sumbit');
    sumButton.onclick = () => {
      test3WriteAnswers();
    };
  }
};

// запись ответов на тест 3 в массив

const test3WriteAnswers = () => {
  const questions = document.querySelectorAll('.test3-answer');
  console.log(questions);
  let answers = [];
  let counter = 0;
  questions.forEach((el) => {
    answers = el.querySelectorAll('.qw');

    answers.forEach((el) => {
      if (el.checked === true) {
        test3[counter].answer = el.value;
      }
    });
    counter += 1;
  });
  // console.log(test3)
  test3GetResult();
};

const test3GetResult = () => {
  let factors = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  // обработка 1 вопроса

  if (test3[0].answer === 'A') {
    factors[0] += 1;
  }

  if (test3[0].answer === 'B') {
    factors[4] += 1;
  }

  if (test3[0].answer === 'V') {
    factors[7] += 1;
  }

  if (test3[0].answer === 'G') {
    factors[10] += 1;
  }

  // обработка 2 вопроса

  if (test3[1].answer === 'A') {
    factors[2] += 1;
  }

  if (test3[1].answer === 'B') {
    factors[5] += 1;
  }

  if (test3[1].answer === 'V') {
    factors[11] += 1;
  }

  if (test3[1].answer === 'G') {
    factors[1] += 1;
  }

  // обработка 3 вопроса

  if (test3[2].answer === 'A') {
    factors[8] += 1;
  }

  if (test3[2].answer === 'B') {
    factors[3] += 1;
  }

  if (test3[2].answer === 'V') {
    factors[2] += 1;
  }

  if (test3[2].answer === 'G') {
    factors[4] += 1;
  }
  // обработка 4 вопроса

  if (test3[3].answer === 'A') {
    factors[3] += 1;
  }

  if (test3[3].answer === 'B') {
    factors[5] += 1;
  }

  if (test3[3].answer === 'V') {
    factors[2] += 1;
  }

  if (test3[3].answer === 'G') {
    factors[8] += 1;
  }
  // обработка 5 вопроса

  if (test3[4].answer === 'A') {
    factors[2] += 1;
  }

  if (test3[4].answer === 'B') {
    factors[1] += 1;
  }

  if (test3[4].answer === 'V') {
    factors[0] += 1;
  }

  if (test3[4].answer === 'G') {
    factors[10] += 1;
  }
  // обработка 6 вопроса

  if (test3[5].answer === 'A') {
    factors[1] += 1;
  }

  if (test3[5].answer === 'B') {
    factors[0] += 1;
  }

  if (test3[5].answer === 'V') {
    factors[11] += 1;
  }

  if (test3[5].answer === 'G') {
    factors[5] += 1;
  }

  // обработка 7 вопроса

  if (test3[6].answer === 'A') {
    factors[2] += 1;
  }

  if (test3[6].answer === 'B') {
    factors[4] += 1;
  }

  if (test3[6].answer === 'V') {
    factors[11] += 1;
  }

  if (test3[6].answer === 'G') {
    factors[5] += 1;
  }

  // обработка 8 вопроса

  if (test3[7].answer === 'A') {
    factors[8] += 1;
  }

  if (test3[7].answer === 'B') {
    factors[10] += 1;
  }

  if (test3[7].answer === 'V') {
    factors[11] += 1;
  }

  if (test3[7].answer === 'G') {
    factors[9] += 1;
  }

  // обработка 9 вопроса

  if (test3[8].answer === 'A') {
    factors[5] += 1;
  }

  if (test3[8].answer === 'B') {
    factors[10] += 1;
  }

  if (test3[8].answer === 'V') {
    factors[8] += 1;
  }

  if (test3[8].answer === 'G') {
    factors[7] += 1;
  }
// обработка 10 вопроса

if (test3[9].answer === 'A') {
  factors[3] += 1;
}

if (test3[9].answer === 'B') {
  factors[0] += 1;
}

if (test3[9].answer === 'V') {
  factors[4] += 1;
}

if (test3[9].answer === 'G') {
  factors[10] += 1;
}
// обработка 11 вопроса

if (test3[10].answer === 'A') {
  factors[1] += 1;
}

if (test3[10].answer === 'B') {
  factors[2] += 1;
}

if (test3[10].answer === 'V') {
  factors[11] += 1;
}

if (test3[10].answer === 'G') {
  factors[5] += 1;
}
// обработка 12 вопроса

if (test3[11].answer === 'A') {
  factors[6] += 1;
}

if (test3[11].answer === 'B') {
  factors[10] += 1;
}

if (test3[11].answer === 'V') {
  factors[5] += 1;
}

if (test3[11].answer === 'G') {
  factors[1] += 1;
}
// обработка 13 вопроса

if (test3[12].answer === 'A') {
  factors[4] += 1;
}

if (test3[12].answer === 'B') {
  factors[6] += 1;
}

if (test3[12].answer === 'V') {
  factors[10] += 1;
}

if (test3[12].answer === 'G') {
  factors[1] += 1;
}
// обработка 14 вопроса

if (test3[13].answer === 'A') {
  factors[10] += 1;
}

if (test3[13].answer === 'B') {
  factors[9] += 1;
}

if (test3[13].answer === 'V') {
  factors[3] += 1;
}

if (test3[13].answer === 'G') {
  factors[0] += 1;
}
// обработка 15 вопроса

if (test3[14].answer === 'A') {
  factors[7] += 1;
}

if (test3[14].answer === 'B') {
  factors[8] += 1;
}

if (test3[14].answer === 'V') {
  factors[5] += 1;
}

if (test3[14].answer === 'G') {
  factors[2] += 1;
}
// обработка 16 вопроса

if (test3[15].answer === 'A') {
  factors[6] += 1;
}

if (test3[15].answer === 'B') {
  factors[2] += 1;
}

if (test3[15].answer === 'V') {
  factors[0] += 1;
}

if (test3[15].answer === 'G') {
  factors[7] += 1;
}
// обработка 17 вопроса

if (test3[16].answer === 'A') {
  factors[2] += 1;
}

if (test3[16].answer === 'B') {
  factors[4] += 1;
}

if (test3[16].answer === 'V') {
  factors[6] += 1;
}

if (test3[16].answer === 'G') {
  factors[8] += 1;
}
// обработка 18 вопроса

if (test3[17].answer === 'A') {
  factors[9] += 1;
}

if (test3[17].answer === 'B') {
  factors[3] += 1;
}

if (test3[17].answer === 'V') {
  factors[10] += 1;
}

if (test3[17].answer === 'G') {
  factors[7] += 1;
}
// обработка 19 вопроса

if (test3[18].answer === 'A') {
  factors[5] += 1;
}

if (test3[18].answer === 'B') {
  factors[7] += 1;
}

if (test3[18].answer === 'V') {
  factors[0] += 1;
}

if (test3[18].answer === 'G') {
  factors[9] += 1;
}
// обработка 20 вопроса

if (test3[19].answer === 'A') {
  factors[8] += 1;
}

if (test3[19].answer === 'B') {
  factors[7] += 1;
}

if (test3[19].answer === 'V') {
  factors[0] += 1;
}

if (test3[19].answer === 'G') {
  factors[1] += 1;
}
// обработка 21 вопроса

if (test3[20].answer === 'A') {
  factors[2] += 1;
}

if (test3[20].answer === 'B') {
  factors[9] += 1;
}

if (test3[20].answer === 'V') {
  factors[3] += 1;
}

if (test3[20].answer === 'G') {
  factors[11] += 1;
}
// обработка 22 вопроса

if (test3[21].answer === 'A') {
  factors[0] += 1;
}

if (test3[21].answer === 'B') {
  factors[1] += 1;
}

if (test3[21].answer === 'V') {
  factors[7] += 1;
}

if (test3[21].answer === 'G') {
  factors[9] += 1;
}
// обработка 23 вопроса

if (test3[22].answer === 'A') {
  factors[3] += 1;
}

if (test3[22].answer === 'B') {
  factors[6] += 1;
}

if (test3[22].answer === 'V') {
  factors[7] += 1;
}

if (test3[22].answer === 'G') {
  factors[0] += 1;
}
// обработка 24 вопроса

if (test3[23].answer === 'A') {
  factors[1] += 1;
}

if (test3[23].answer === 'B') {
  factors[7] += 1;
}

if (test3[23].answer === 'V') {
  factors[6] += 1;
}

if (test3[23].answer === 'G') {
  factors[9] += 1;
}
// обработка 25 вопроса

if (test3[24].answer === 'A') {
  factors[1] += 1;
}

if (test3[24].answer === 'B') {
  factors[10] += 1;
}

if (test3[24].answer === 'V') {
  factors[8] += 1;
}

if (test3[24].answer === 'G') {
  factors[3] += 1;
}
// обработка 26 вопроса

if (test3[25].answer === 'A') {
  factors[1] += 1;
}

if (test3[25].answer === 'B') {
  factors[3] += 1;
}

if (test3[25].answer === 'V') {
  factors[11] += 1;
}

if (test3[25].answer === 'G') {
  factors[8] += 1;
}
// обработка 27 вопроса

if (test3[26].answer === 'A') {
  factors[5] += 1;
}

if (test3[26].answer === 'B') {
  factors[10] += 1;
}

if (test3[26].answer === 'V') {
  factors[6] += 1;
}

if (test3[26].answer === 'G') {
  factors[4] += 1;
}
// обработка 28 вопроса

if (test3[27].answer === 'A') {
  factors[11] += 1;
}

if (test3[27].answer === 'B') {
  factors[8] += 1;
}

if (test3[27].answer === 'V') {
  factors[4] += 1;
}

if (test3[27].answer === 'G') {
  factors[6] += 1;
}
// обработка 29 вопроса

if (test3[28].answer === 'A') {
  factors[11] += 1;
}

if (test3[28].answer === 'B') {
  factors[4] += 1;
}

if (test3[28].answer === 'V') {
  factors[3] += 1;
}

if (test3[28].answer === 'G') {
  factors[7] += 1;
}
// обработка 30 вопроса

if (test3[29].answer === 'A') {
  factors[3] += 1;
}

if (test3[29].answer === 'B') {
  factors[5] += 1;
}

if (test3[29].answer === 'V') {
  factors[4] += 1;
}

if (test3[29].answer === 'G') {
  factors[8] += 1;
}
// обработка 31 вопроса

if (test3[30].answer === 'A') {
  factors[0] += 1;
}

if (test3[30].answer === 'B') {
  factors[2] += 1;
}

if (test3[30].answer === 'V') {
  factors[6] += 1;
}

if (test3[30].answer === 'G') {
  factors[9] += 1;
}
// обработка 32 вопроса

if (test3[31].answer === 'A') {
  factors[6] += 1;
}

if (test3[31].answer === 'B') {
  factors[9] += 1;
}

if (test3[31].answer === 'V') {
  factors[10] += 1;
}

if (test3[31].answer === 'G') {
  factors[11] += 1;
}
// обработка 33 вопроса

if (test3[32].answer === 'A') {
  factors[9] += 1;
}

if (test3[32].answer === 'B') {
  factors[11] += 1;
}

if (test3[32].answer === 'V') {
  factors[4] += 1;
}

if (test3[32].answer === 'G') {
  factors[6] += 1;
}
  console.log(factors);

  const div = document.querySelector('.tab-3');
  const newDiv=document.createElement('div')
  newDiv.classList.add('test3-result')

  const oldResult=div.querySelector('.test3-result')
  if(oldResult){
    oldResult.remove()
  }

  newDiv.remove()
  newDiv.innerHTML += `
  <div class='full-result'>
  <h2 class='test3-h2'>Результаты тестирвания</h2>
  


  <div class='test-description test3-desc'> 
  <p class='new-p'>
  <button class="btn mybtn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
  A - Потребность в высокой зарплате  ${factors[0]}
  </button>
  <button class="btn mybtn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample1" aria-expanded="false" aria-controls="collapseExample1">
  B - Потребность в хороших условиях работы  ${factors[1]}
  </button>
  <button class="btn mybtn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample2">
  C - Потребность в четком структурировании работы  ${factors[2]}
  </button>
  <button class="btn mybtn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample3" aria-expanded="false" aria-controls="collapseExample3">
  D - Потребность в социальных контактах ${factors[3]}
  </button>
  <button class="btn mybtn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample4" aria-expanded="false" aria-controls="collapseExample4">
  E - Потребность в стабильных взаимоотношениях  ${factors[4]}
  </button>
  <button class="btn mybtn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample5" aria-expanded="false" aria-controls="collapseExample5">
  F - Потребность в признания от других людей  ${factors[5]}
  </button>
  <button class="btn mybtn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample6" aria-expanded="false" aria-controls="collapseExample6">
  G - Потребность в достижении сложных цели  ${factors[6]}
  </button>
  <button class="btn mybtn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample7" aria-expanded="false" aria-controls="collapseExample7">
  H - Стремление руководить другими  ${factors[7]}
  </button>
  <button class="btn mybtn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample8" aria-expanded="false" aria-controls="collapseExample8">
  I - Потребность в разнообразии, переменах и стимуляции  ${factors[8]}
  </button>
  <button class="btn  mybtn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample9" aria-expanded="false" aria-controls="collapseExample9">
  J - Потребность быть креативным и открытым   ${factors[9]}
  </button>
  <button class="btn mybtn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample10" aria-expanded="false" aria-controls="collapseExample10">
  K - Потребность в совершенствовании, росте и развитии как личности   ${factors[10]}
  </button>
  <button class="btn mybtn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample11" aria-expanded="false" aria-controls="collapseExample11">
  L - Потребность в интересной общественно полезной работе  ${factors[11]}
  </button>
 



</p>

<div class="collapse" id="collapseExample">
  <div class="card card-body">
  <p class='description-text'>
  Потребность в высокой зарплате и материальном вознаграждении; желание иметь работу с хорошим набором льгот и надбавок. Данная потребность выявляет тенденцию к изменению в процессе трудовой жизни; увеличение трат обусловливает повышение значения этой потребности (например, наличие долгов, возникновение новых семейных обязательств, дополнительные или тяжелые финансовые обязательства).
  </p>
  </div>
</div>


<div class="collapse" id="collapseExample1">
  <div class="card card-body">
  <p class='description-text'>
  Потребность в хороших условиях работы и комфортной окружающей обстановке является важным аспектом для удовлетворенности работой и общего благополучия человека. Когда человек работает в комфортных условиях, он может более эффективно выполнять свои задачи, поскольку его внимание не отвлекается на неприятные факторы, такие как шум, жара или холод.
Комфортная обстановка также способствует улучшению настроения и уменьшению уровня стресса у работника, что может привести к повышению производительности и уменьшению числа ошибок при выполнении задач. Это может привести к увеличению удовлетворенности работой и уменьшению рисков выгорания на рабочем месте.
Потребность в хороших условиях работы также может быть связана с желанием иметь возможность развиваться профессионально и личностно. Когда работник получает подходящую обстановку для работы, он может лучше концентрироваться на своих задачах и искать возможности для роста и развития.
  </p>
  </div>
</div>

<div class="collapse" id="collapseExample2">
  <div class="card card-body">
  <p class='description-text'>
  Потребность в четком структурировании работы, наличии обратной связи и информации, позволяющей судить о результатах своей работы, потребность в снижении неопределенности и установлении правил и директив выполнения работы. Данный показатель – мерило потребности в руководстве и определенности; потребность, которая может служить индикатором стресса или беспокойства и которая может возрастать или падать, когда человек сталкивается с серьезными изменениями в своей личной жизни или на работе.
  </p>
  </div>
</div>

<div class="collapse" id="collapseExample3">
  <div class="card card-body">
  <p class='description-text'>
  Потребность в социальных контактах: общение с широким кругом людей, легкая степень доверительности, тесных связей с коллегами. Это показатель стремления работать с другими людьми, который не следует путать с тем, насколько хорошо человек относится к своим коллегам. Этот фактор может иметь очень низкое значение, тем ни менее человек может быть достаточно социально адаптированным.
  </p>
  </div>
</div>

<div class="collapse" id="collapseExample4">
  <div class="card card-body">
  <p class='description-text'>
  Потребность формировать и поддерживать долгосрочные стабильные взаимоотношения, малое число коллег по работе, значительная степень близости взаимоотношений, доверительности. Потребность в более тесных контактах с другими. Как и в случае с фактором 4, низкое его значение не свидетельствует о слабой социальной адаптации и отсутствии социальных навыков.
  </p>
  </div>
</div>

<div class="collapse" id="collapseExample5">
  <div class="card card-body">
  <p class='description-text'>
  Потребность в завоевании признания со стороны других людей, в том, чтобы окружающие ценили заслуги, достижения и успехи индивидуума. Этот показатель указывает на симпатии к другим и хорошие социальные взаимоотношения, это потребность личности во внимании со стороны других людей, желание чувствовать собственную значимость.
  </p>
  </div>
</div>

<div class="collapse" id="collapseExample6">
  <div class="card card-body">
  <p class='description-text'>
  Потребность ставить для себя дерзновенные сложные цели и достигать их; это показатель потребности следовать поставленным целям и быть самомотивированным. Показатель стремления намечать и завоевывать сложные, многообещающие рубежи.
  </p>
  </div>
</div>

<div class="collapse" id="collapseExample7">
  <div class="card card-body">
  <p class='description-text'>
  Потребность во влиятельности и власти, стремление руководить другими; настойчивое стремление к конкуренции и влиятельности. Это показатель конкурентной напористости, поскольку предусматривает обязательное сравнение с другими людьми и оказание на них влияния.
  </p>
  </div>
</div>

<div class="collapse" id="collapseExample8">
  <div class="card card-body">
  <p class='description-text'>
  Потребность в разнообразии, переменах и стимуляции; стремление избегать рутины (скуки). Указывает тенденцию всегда находиться в состоянии приподнятости, готовности к действиям, любви к переменам и стимуляции.
  </p>
  </div>
</div>

<div class="collapse" id="collapseExample9">
  <div class="card card-body">
  <p class='description-text'>
  Потребность быть креативным, анализирующим, думающим работником, открытым для новых идей. Этот показатель свидетельствует о тенденции к проявлению пытливости, любопытства и нетривиального мышления. Но идеи, которые вносит и к которым стремится данный индивидуум, не обязательно будут правильными или приемлемыми.
  </p>
  </div>
</div>

<div class="collapse" id="collapseExample10">
  <div class="card card-body">
  <p class='description-text'>
  Потребность в совершенствовании, росте и развитии как личности. Показатель желания самостоятельности, независимости и самосовершенствования.Для человека потребность в совершенствовании, росте и развитии как личности является одной из основных потребностей, которая помогает ему достигать своих целей и максимально раскрыть свой потенциал. Когда человек стремится к личностному росту и развитию, он обычно определяет для себя новые цели и задачи, которые оказываются выше по уровню сложности, чем предыдущие, что требует от него пересмотра своих компетенций и подходов.
   Человек может чувствовать удовлетворение и радость от того, что он развивается, приобретает новые знания и навыки, повышает свою эффективность и комфортность в жизни. Также, развитие личности помогает человеку лучше понимать себя, свои потребности и желания, а также более глубоко воспринимать окружающий мир и взаимодействовать с другими людьми. 
   Однако, нужно учитывать, что потребность в росте и развитии может быть разной у разных людей и зависит от многих факторов, таких как социокультурный контекст, индивидуальные черты личности и жизненный опыт. Кроме того, если человек не получает достаточного удовлетворения от своего роста и развития, это может привести к чувству неудовлетворенности жизнью и возможным психологическим проблемам.
  </p>
  </div>
</div>

<div class="collapse" id="collapseExample11">
  <div class="card card-body">
  <p class='description-text'>
  Потребность в ощущении востребованности в интересной общественно полезной работе. Это показатель потребности в работе, наполненной смыслом и значением, с элементом общественной полезности.Она связана с желанием ощущать, что наш труд имеет ценность для общества и приносит пользу другим людям.
  Когда человек ощущает, что его работа не только приносит доход, но и помогает другим людям или решает какую-то важную социальную проблему, это укрепляет его чувство значимости и уверенности в себе. Кроме того, такая работа может способствовать формированию у человека миссии жизни и давать ему смысл и цель в жизни.Важно, чтобы человек находил работу, которая соответствует его интересам и ценностям. Это помогает ему испытывать удовлетворение от своей работы и ощущать свой вклад в общество.
  </p>
  </div>
</div>





</div>



  <div id="chartdiv"></div>
  </div>
  `
  ;
  div.appendChild(newDiv)
  window.scrollTo(0, document.body.scrollHeight);

  am5.ready(function() {

    // Create root element
    // https://www.amcharts.com/docs/v5/getting-started/#Root_element
    var root = am5.Root.new("chartdiv");
    
    // Set themes
    // https://www.amcharts.com/docs/v5/concepts/themes/
    root.setThemes([
      am5themes_Animated.new(root)
    ]);
    
    // Create chart
    // https://www.amcharts.com/docs/v5/charts/xy-chart/
    var chart = root.container.children.push(am5xy.XYChart.new(root, {
      panX: false,
      panY: false,
      wheelX: "none",
      wheelY: "none"
    }));
    
    // Add cursor
    // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
    var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {}));
    cursor.lineY.set("visible", false);
    
    // Create axes
    // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
    var xRenderer = am5xy.AxisRendererX.new(root, { minGridDistance: 30 });
    
    var xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
      maxDeviation: 0,
      categoryField: "name",
      renderer: xRenderer,
      tooltip: am5.Tooltip.new(root, {})
    }));
    
    xRenderer.grid.template.set("visible", false);
    
    var yRenderer = am5xy.AxisRendererY.new(root, {});
    var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
      maxDeviation: 0,
      min: 0,
      extraMax: 0.1,
      renderer: yRenderer
    }));
    
    yRenderer.grid.template.setAll({
      strokeDasharray: [2, 2]
    });
    
    // Create series
    // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
    var series = chart.series.push(am5xy.ColumnSeries.new(root, {
      name: "Series 1",
      xAxis: xAxis,
      yAxis: yAxis,
      valueYField: "value",
      sequencedInterpolation: true,
      categoryXField: "name",
      tooltip: am5.Tooltip.new(root, { dy: -25, labelText: "{valueY}" })
    }));
    
    
    series.columns.template.setAll({
      cornerRadiusTL: 5,
      cornerRadiusTR: 5,
      strokeOpacity: 0
    });
    
    series.columns.template.adapters.add("fill", (fill, target) => {
      return chart.get("colors").getIndex(series.columns.indexOf(target));
    });
    
    series.columns.template.adapters.add("stroke", (stroke, target) => {
      return chart.get("colors").getIndex(series.columns.indexOf(target));
    });
    
    // Set data
    var data = [
      {
        name: "Фактор A",
        value: factors[0],
        bulletSettings: { src: "https://www.amcharts.com/lib/images/faces/A04.png" }
      },
      {
        name: "Фактор B",
        value:factors[1],
        bulletSettings: { src: "https://www.amcharts.com/lib/images/faces/C02.png" }
      },
      {
        name: "Фактор C",
        value: factors[2],
        bulletSettings: { src: "https://www.amcharts.com/lib/images/faces/D02.png" }
      },
      {
        name: "Фактор D",
        value: factors[3],
        bulletSettings: { src: "https://www.amcharts.com/lib/images/faces/D02.png" }
      },
      {
        name: "Фактор E",
        value:factors[4],
        bulletSettings: { src: "https://www.amcharts.com/lib/images/faces/D02.png" }
      },
      {
        name: "Фактор F",
        value: factors[5],
        bulletSettings: { src: "https://www.amcharts.com/lib/images/faces/D02.png" }
      },
      {
        name: "Фактор G",
        value: factors[6],
        bulletSettings: { src: "https://www.amcharts.com/lib/images/faces/D02.png" }
      },
      {
        name: "Фактор H",
        value:factors[7],
        bulletSettings: { src: "https://www.amcharts.com/lib/images/faces/D02.png" }
      },
      {
        name: "Фактор I",
        value: factors[8],
        bulletSettings: { src: "https://www.amcharts.com/lib/images/faces/D02.png" }
      },
      {
        name: "Фактор J",
        value: factors[9],
        bulletSettings: { src: "https://www.amcharts.com/lib/images/faces/D02.png" }
      },
      {
        name: "Фактор K",
        value: factors[10],
        bulletSettings: { src: "https://www.amcharts.com/lib/images/faces/D02.png" }
      },
      
      {
        name: "Фактор L",
        value: factors[11],
        bulletSettings: { src: "./images/cool.png" }
      }
    ];
    
    series.bullets.push(function() {
      return am5.Bullet.new(root, {
        locationY: 1,
        sprite: am5.Picture.new(root, {
          templateField: "bulletSettings",
          width: 50,
          height: 50,
          centerX: am5.p50,
          centerY: am5.p50,
          shadowColor: am5.color(0x000000),
          shadowBlur: 4,
          shadowOffsetX: 4,
          shadowOffsetY: 4,
          shadowOpacity: 0.6
        })
      });
    });
    
    xAxis.data.setAll(data);
    series.data.setAll(data);
    
    // Make stuff animate on load
    // https://www.amcharts.com/docs/v5/concepts/animations/
    series.appear(1000);
    chart.appear(1000, 100);
    
    }); // end am5.ready()

};
