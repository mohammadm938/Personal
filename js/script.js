let page = "index";

function removeAllChildNodes(parent = document.getElementById("all-info")) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function choosePage(pageName) {
  // element.preventDefault;
  removeAllChildNodes();
  console.log(pageName);
  switch (pageName) {
    case "index":
      homePage();
      break;
    case "projectTracking":
      projectTracking();
      break;
    case "addProject":
      addProject();
      break;
    default:
      break;
  }
}

function homePage() {
  loadHtml();
  clickOnItem()
  function loadHtml() {
    let box = document.getElementById("all-info");
    box.innerHTML += `<!-- Start about section -->
    <section id="about">
        <div class="container" style="position: relative;">
            <div class="right">
                <p class="sayhi">سلام! من</p>
                <h2 class="name">محمد مسعودی <span>هستم</span></h2>
                <p class="about">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز 
                </p>
                <a onclick="choosePage('addProject',this)" href="#" class="hireme">درخواست ثبت پروژه</a>
            </div>
            <div class="left">
                  <img src="img/Vector(1).svg" alt="bg" class="bluebg">
                  <img src="img/Vector.svg" alt="bg" class="yellowbg">
                  <img class="human" src="img/human.svg" alt="my svg">
            </div>
        </div>
        <div class="clearFix"></div>

    </section>
    <!-- Stop about section -->

    <!-- Start skill section -->
    <section id="skills">
      <div class="container">
        <h2 class="title">مهارت ها</h2>
        <div class="html skill">
          <div class="persent"><p><i class="fab fa-html5"></i>html</p></div>
        </div>
        <div class="css skill">
          <div class="persent"><p><i class="fab fa-css3"></i>css</p></div>
        </div>
        <div class="js skill">
          <div class="persent"><p><i class="fab fa-js"></i>js</p></div>
        </div>
        <div class="python skill">
          <div class="persent"><p><i class="fab fa-python"></i>python</p></div>
        </div>
        <div class="php skill">
          <div class="persent"><p><i class="fab fa-php"></i>php</p></div>
        </div>
      </div>
    </section>
    <!-- Stop skill section -->

    <!-- Start work article -->
    <article id="works">
      <div class="container">
        <h2 class="article-title">نمونه کار ها</h2>
        <div class="items">

          <div class="item">
            <div class="face1 item-header">
              <img src="img/work/work1.png" alt="work img">
            </div>
            <div class="face2">
              <div class="item-content">
                <h3 class="title">عنوان</h3>
                <p class="desc">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ است </p>
              </div>
              <div class="item-footer">
                <span class="data">1400/99/99</span>
                <a href="#" class="show-project">مشاهده</a>
              </div>
            </div>
          </div>

          <div class="item">
            <div class="face1 item-header">
              <img src="img/work/work2.png" alt="work img">
            </div>
            <div class="face2">
              <div class="item-content">
                <h3 class="title">عنوان</h3>
                <p class="desc">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ است </p>
              </div>
              <div class="item-footer">
                <span class="data">1400/99/99</span>
                <a href="#" class="show-project">مشاهده</a>
              </div>
            </div>
          </div>

          <div class="item">
            <div class="face1 item-header">
              <img src="img/work/work3.png" alt="work img">
            </div>
            <div class="face2">
              <div class="item-content">
                <h3 class="title">عنوان</h3>
                <p class="desc">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ است </p>
              </div>
              <div class="item-footer">
                <span class="data">1400/99/99</span>
                <a href="#" class="show-project">مشاهده</a>
              </div>
            </div>
          </div>

          <img class="line" src="img/line.png" alt="">


          <div class="item">
            <div class="face1 item-header">
              <img src="img/work/work4.png" alt="work img">
            </div>
            <div class="face2">
              <div class="item-content">
                <h3 class="title">عنوان</h3>
                <p class="desc">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ است </p>
              </div>
              <div class="item-footer">
                <span class="data">1400/99/99</span>
                <a href="#" class="show-project">مشاهده</a>
              </div>
            </div>
          </div>

          <div class="item">
            <div class="face1 item-header">
              <img src="img/work/work5.png" alt="work img">
            </div>
            <div class="face2">
              <div class="item-content">
                <h3 class="title">عنوان</h3>
                <p class="desc">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ است </p>
              </div>
              <div class="item-footer">
                <span class="data">1400/99/99</span>
                <a href="#" class="show-project">مشاهده</a>
              </div>
            </div>
          </div>

          <div class="item">
            <div class="face1 item-header">
              <img src="img/work/work6.png" alt="work img">
            </div>
            <div class="face2">
              <div class="item-content">
                <h3 class="title">عنوان</h3>
                <p class="desc">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ است </p>
              </div>
              <div class="item-footer">
                <span class="data">1400/99/99</span>
                <a href="#" class="show-project">مشاهده</a>
              </div>
            </div>
          </div>
          <img class="line" src="img/line.png" alt="">

          <div class="item">
            <div class="face1 item-header">
              <img src="img/work/work7.png" alt="work img">
            </div>
            <div class="face2">
              <div class="item-content">
                <h3 class="title">عنوان</h3>
                <p class="desc">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ است </p>
              </div>
              <div class="item-footer">
                <span class="data">1400/99/99</span>
                <a href="#" class="show-project">مشاهده</a>
              </div>
            </div>
          </div>

          <div class="item">
            <div class="face1 item-header">
              <img src="img/work/work8.png" alt="work img">
            </div>
            <div class="face2">
              <div class="item-content">
                <h3 class="title">عنوان</h3>
                <p class="desc">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ است </p>
              </div>
              <div class="item-footer">
                <span class="data">1400/99/99</span>
                <a href="#" class="show-project">مشاهده</a>
              </div>
            </div>
          </div>
          <img class="line" src="img/line.png" alt="">

        </div>
      </div>
    </article>
    <!-- Stop work article -->

    <!-- Start connect us -->
    <section id="connectus">
      <div class="container">
        <div class="title">
          <h2>ارتباط با من</h2>
        </div>
        <div class="right">
          <form action="#" class="connectus-form">
            <input type="text" name="name" class="name" placeholder="نام شما">
            <input type="email" name="email" class="email" placeholder="ایمیل شما">
            <textarea name="text" class="text">متن پیام شما</textarea>
            <button type="submit" class="connectus-btn">ارسال پیام شما</button>
          </form>
        </div>
        <div class="left">
          <img src="img/Ronio - Connection.svg" alt="connecting us">
        </div>
        <div class="clearFix"></div>
      </div>
    </section>
    <!-- Stop connect us -->

    <!-- Start social media -->
    <section id="socialmedia">
      <div class="container">
        <img src="img/Ronio - Contact us 1.svg" usemap="#image-map">
        
        <map name="image-map">
            <area target="_blank" alt="My telegram account" title="My telegram account" href="https://t.me/mohammadm938" coords="165,316,100" shape="circle">
            <area target="_blank" alt="My email" title="My email" href="mailto:ImMohammadm938@gmail.com" coords="399,390,101" shape="circle">
            <area target="_blank" alt="My phone number" title="My phone number" href="tel:+98 9384587726" coords="629,237,100" shape="circle">
        </map>
      </div>
    </section>
    <!-- Stop social media -->`; 
  }
  function clickOnItem(){
    let items = document.querySelectorAll('.item');
        items.forEach((item)=>{
          item.addEventListener('touchstart', processTouchStart, false)
        })
        function processTouchStart(e){
          if(e.target.classList.contains('item')){
            e.target.style.boxShadow = " 0 5px 20px 0 rgb(0 0 0 / 25%)";
            e.target.children[1].style.transition="1s";
            e.target.children[1].style.transform="translateY(0)";
            e.target.children[1].children[1].children[1].style.left= "0";
            setTimeout(()=>{
              e.target.style.boxShadow="0 5px 10px 0 rgba(0, 0, 0, 0)";
              e.target.children[1].style.transform="translateY(-200px)";
            },3000)
          }
          if(e.target.tagName == 'IMG'){
            e.target.parentElement.parentElement.style.boxShadow = " 0 5px 20px 0 rgb(0 0 0 / 25%)";
            e.target.parentElement.parentElement.children[1].style.transition="1s";
            e.target.parentElement.parentElement.children[1].style.transform="translateY(0)";
            e.target.parentElement.parentElement.children[1].children[1].children[1].style.left= "0";
            setTimeout(()=>{
              e.target.parentElement.parentElement.style.boxShadow="0 5px 10px 0 rgba(0, 0, 0, 0)"
              e.target.parentElement.parentElement.children[1].style.transform="translateY(-200px)"
          },3000)
          }
        }
  }
}

function projectTracking() {
  loadHtmlTags();
  document
    .querySelector("form")
    .addEventListener("submit", loadDataForProjectTracking);

  // Ajax
  function loadDataForProjectTracking(e) {
    e.preventDefault();
    const key = document.querySelector("#id");
    if (key.value.length > 4) {
      let box = document.getElementById("result");
      let spinner = document.getElementById("spinner");
      let find = 0;
      box.style.removeProperty("display");

      const xhr = new XMLHttpRequest();

      xhr.open("GET", "js/project-detail.json", true);

      xhr.onload = function () {
        console.log("enter");
        if (this.status === 200) {
          const response = JSON.parse(this.responseText);
          try {
            response.forEach((project) => {
              if (project.id == key.value) {
                spinner.style.display = "none";
                // Show Error Box
                const output = `
                          <div class="project">
                          <h3 class="project-title">${project.name}</h3>
                          <div class="project-desc">
                              <p class="leftp">درصد پیشرفت پروژه</p>
                              <p class="project-persent">${project.persent}</p>
                              <div class="project-persent-compleat">
                              <div style="width: ${project.persent};" class="project-bg-persent"></div>
                              </div>
                          </div>
                          </div>`;
                box.innerHTML += output;
                find = 1;
                throw BreakException; // For Exit Loop
              }
            });
          } catch {
            // Noting
          }
          if (find == 0) {
            // if user key is wrong
            if (document.getElementById("wrong-key")) {
              spinner.style.display = "none";
              document.getElementById("wrong-key").remove();
              box.innerHTML += `<div id="wrong-key">
                <p>پروژه فعالی با این کد پیدا نشد</p>
                </div>`;
            } else {
              spinner.style.display = "none";
              box.innerHTML += `<div id="wrong-key">
                <p>پروژه فعالی با این کد پیدا نشد</p>
                </div>`;
                setTimeout(() => {
                  document.getElementById("wrong-key").remove();
                }, 4000);
            }
          }
        }
      };
      xhr.send();
    }
  }

  function loadHtmlTags() {
    let box = document.getElementById("all-info");
    box.innerHTML += `    <!-- Start project tracking -->
    <div id="all-info">
    <section id="project-tracking">
      <div id="container" class="container">
        <div class="getcode">
          <form id="form" action="#" autocomplete="off">
            <input
              type="text"
              id="id"
              name="id"
              class="id"
              placeholder="کدی که بهتون داده شده را وارد کنید"
            />
            <button type="submit" class="tracking">پیگیری</button>
          </form>
          <div style="display:none" id="result" class="result">
            <i id="spinner" class="fas fa-spinner"></i>
          </div>
        </div>
      </div>
    </section>
    </div>
    <!-- Stop project tracking -->`;
  }
}

function addProject() {
  loadHtml();
  function loadHtml() {
    let box = document.getElementById("all-info");
    box.innerHTML += `<!-- Start add project -->
    <section id="add-project">
      <div class="container">
        <div class="title">
          <h2>ایجاد پروژه</h2>
        </div>
        <div class="right">
          <form action="#" class="addform">
            <div class="rightside">
                <h3>اطلاعات پروژه</h3>
                <input required type="text" class="title" placeholder="عنوان پروژه" />
              <input required
                type="text"
                class="price"
                placeholder="هزینه ای که در نظر گرفتید"
              />
              <input required
                type="text"
                class="endtime"
                placeholder="حدااکثر تاریخی که پروژه می بایست به اتمام برسد"
              />
              <textarea required name="text" class="text">توضیحات پروژه</textarea>
            </div>
            <div class="leftside">
                <h3>اطلاعت شما</h3>
              <input required type="text" class="name" placeholder="نام شما" />
              <input required type="email" class="email" placeholder="ایمیل شما" />
              <input required type="text" class="phone" placeholder="شماره تلفن شما" />
              <button type="submit" class="btn">ثبت درخواست</button>
            </div>
        <div class="clearFix"></div>

        </form>
        </div>
        
        <div class="left">
            <img src="img/Ronio - Quitting time.svg" alt="work vactor">
        </div>
      </div>
    </section>
    <!-- Stop add project -->`;
  }
}