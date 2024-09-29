import React from 'react';
import './CityInfo.css';
function CityInfo() {
  return (
    <div className="city-info-container">
      <div className="city-info">
      <h1 className="animated-title">Одесса</h1>
        <p>Страна: Украина</p>

        {}
        <div className="info-block">
          <p className="fade-in-delay-1">
            Одесса — город с богатой историей, начавшейся в 1794 году... Говорят, что когда первый камень был заложен, море улыбнулось, а чайки начали петь одесские песни задолго до того, как они были написаны.
          </p>
          <img src={process.env.PUBLIC_URL + '/assets/4.jpg'} alt="Воронцовский маяк" className="photo-right fade-in-delay-2" />
        </div>

        {}
        <div className="info-block reverse">
          <img src={process.env.PUBLIC_URL + '/assets/04.jpg'} alt="Пассаж" className="photo-left fade-in-delay-4" />
          <p className="fade-in-delay-3">
            С тех пор Одесса превратилась в жемчужину у моря, где каждая улочка дышит историей и пропитана юмором. Прогуливаясь по Дерибасовской, можно не только насладиться архитектурой, но и услышать такие анекдоты, что улыбка не сойдет с лица до самого вечера.
          </p>
        </div>

        {}
        <div className="info-block">
          <p className="fade-in-delay-5">
            Потёмкинская лестница, построенная в XIX веке, стала не только архитектурным шедевром, но и лучшим бесплатным тренажёром города. Поднявшись по ней, вы не только полюбуетесь великолепным видом на порт, но и почувствуете себя настоящим одесситом, готовым к любым жизненным подъёмам.
          </p>
          <img src={process.env.PUBLIC_URL + '/assets/potem.jpg'} alt="Потемкинская лестница" className="photo-right fade-in-delay-6" />
        </div>

        {}
        <div className="info-block reverse">
          <img src={process.env.PUBLIC_URL + '/assets/Lanzheron-beach.jpg'} alt="Пляж Ланжерон" className="photo-left fade-in-delay-8" />
          <p className="fade-in-delay-7">
            Местное море — это не просто вода, а целый персонаж со своим характером. Оно может быть спокойным и ласковым, а может подшутить, забрызгав вас солёными брызгами, когда вы этого совсем не ожидаете.
          </p>
        </div>

        {}
        <div className="info-block">
          <p className="fade-in-delay-9">
            Привоз — это сердце Одессы, где можно найти всё, что душе угодно, и даже то, о чём вы ещё не догадываетесь. Продавцы здесь настолько красноречивы, что вы уйдёте не только с покупками, но и с парочкой жизненных советов и свежим анекдотом в придачу.
          </p>
          <img src={process.env.PUBLIC_URL + '/assets/rynok-privoz-odessa.jpg'} alt="Привоз" className="photo-right fade-in-delay-10" />
        </div>

        {}
        <div className="info-block reverse">
          <img src={process.env.PUBLIC_URL + '/assets/Monument-to-Duke-de-Richelieu.jpg'} alt="Памятник Дюку де Ришелье" className="photo-left fade-in-delay-12" />
          <p className="fade-in-delay-11">
            Одесситы — люди особенные. У них на каждый вопрос есть ответ, и не просто ответ, а целая история с юмором и мудростью. Спросите у местного жителя, как пройти куда-нибудь, и рискуете получить экскурсию, после которой будете знать город лучше некоторых гидов.
          </p>
        </div>

        {}
        <div className="info-block">
          <p className="fade-in-delay-13">
            В Одессе даже трамваи ходят с особым шармом, словно приглашают вас на неспешную прогулку по городу. А светофоры, кажется, подмигивают зелёным светом чуть дольше, чтобы вы успели перейти дорогу и насладиться очередным архитектурным шедевром.
          </p>
          <img src={process.env.PUBLIC_URL + '/assets/88223.jpg'} alt="Одесский трамвай" className="photo-right fade-in-delay-14" />
        </div>

        {}
        <div className="info-block highlight reverse">
          <img src={process.env.PUBLIC_URL + '/assets/opera.jpg'} alt="Оперный театр" className="photo-left fade-in-delay-16" />
          <p className="fade-in-delay-15">
            Приезжайте в Одессу! Здесь вас встретят как старого друга, накормят вкуснейшими блюдами, рассмешат до слёз и подарят воспоминания на всю жизнь. И, конечно, научат паре-тройке одесских выражений, без которых жизнь станет гораздо веселее.
          </p>
        </div>
      </div>
    </div>
  );
}

export default CityInfo;