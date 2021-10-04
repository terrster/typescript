import { fromEvent, map, pluck, tap } from "rxjs";

const body = document.querySelector('body');
const texto = document.createElement('div');

texto.innerHTML = `
    
Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis rem modi distinctio facilis, expedita saepe doloremque cum laudantium earum adipisci aliquid molestias quis natus tempora blanditiis, et ex officiis inventore.
Officia dolores earum in optio sit velit, nisi labore laudantium nam nobis similique non, illum minima ratione commodi. Recusandae quidem quod ipsum libero, nemo asperiores fuga ut similique nostrum vero?
Dolores ab quo laboriosam iste deleniti reiciendis molestias ipsa voluptatum laudantium porro necessitatibus dicta, eligendi voluptatem cupiditate quibusdam minus voluptates ea amet quidem vel. Non id vel modi labore dolorum?
Molestiae inventore consequatur laboriosam fugit, sed ullam praesentium nulla expedita temporibus et itaque, illum repudiandae ipsum quas ratione qui corrupti quibusdam, voluptatum distinctio earum iste ipsa maiores eum animi. Laboriosam!
Omnis, commodi. Sapiente suscipit veritatis corrupti numquam natus magni. Deserunt tenetur pariatur alias ducimus, rem sint incidunt obcaecati animi dolores, dolorum architecto suscipit laboriosam nostrum maiores deleniti reprehenderit eveniet est.
Beatae autem voluptatem at tempore officiis cupiditate et dolorem quidem accusantium optio sint delectus hic, enim assumenda fuga dicta illo culpa temporibus quia ullam accusamus aut amet molestiae exercitationem! A.
Eaque consequatur molestiae veritatis quis quibusdam atque sequi saepe voluptatum. Quae voluptate dolor nihil? Corrupti nisi, exercitationem laborum aperiam commodi nostrum vitae inventore, consequuntur ea corporis pariatur error. Quasi, eius?
Explicabo, corrupti assumenda! Ut impedit reprehenderit commodi fuga laboriosam vitae provident itaque at atque fugiat distinctio exercitationem culpa accusantium architecto alias voluptatem, sunt deserunt reiciendis numquam. Reprehenderit quidem magnam sunt.
Laborum et at, eos dolor eius optio! Recusandae esse illum unde quibusdam doloremque cum atque, voluptatum nostrum quia autem aliquid eum quae suscipit aperiam inventore voluptas modi alias error optio?
Sunt labore officiis quas corporis ex. Id, maiores dignissimos tempore pariatur voluptatibus reprehenderit porro quae aliquid reiciendis illum debitis sint? Officia ipsam facere vel magnam ullam, quisquam eligendi at hic?
Accusantium quia iusto nihil aliquid incidunt aperiam quidem aspernatur neque labore non cumque ullam temporibus atque assumenda sed dolore deleniti laudantium fugiat quas sequi, consequatur suscipit! Recusandae odio quo cupiditate.
Harum repellat quasi pariatur natus delectus dicta voluptatem, aliquid distinctio ullam dolor deserunt. Dicta eveniet pariatur blanditiis, ipsa ratione accusantium temporibus, inventore numquam velit minima magni labore vero, consectetur voluptatem.
Necessitatibus labore minima distinctio tempore adipisci explicabo non dignissimos dolores illo inventore provident eligendi nam quis aspernatur enim eum consectetur a sunt, ex nesciunt quidem. Ipsa error magnam reiciendis adipisci.
Voluptatem quos corporis, est tempore numquam maxime hic a perspiciatis facere explicabo, recusandae quibusdam accusantium ipsa aut doloribus, architecto vel nesciunt quaerat. Inventore quos modi eligendi ratione id, aperiam autem.
At fugiat aliquid dolorum rem veritatis vel non laboriosam! Doloribus sed commodi quam! Mollitia non, pariatur autem illum veritatis error ut, distinctio aspernatur, hic quod quaerat dolorem. Hic, nobis excepturi?
Eligendi voluptate eveniet laboriosam reprehenderit tenetur odit perferendis molestiae delectus praesentium. Natus, perspiciatis harum! Dolor fugit dolores, adipisci repellat eveniet, velit optio doloremque animi quia fugiat consectetur ea at incidunt?
Odit esse quod odio quasi voluptas, ipsum, illum libero consequuntur pariatur ut omnis dolore, dolor ad. Tenetur aperiam aliquid suscipit, est facere officiis soluta repudiandae nisi alias iste debitis excepturi!
Quisquam porro ipsa quibusdam? Omnis eaque praesentium, est ut a dignissimos similique magnam qui ratione iste ipsam accusamus itaque laborum velit ea, ullam blanditiis fugit in pariatur? Autem, tenetur quisquam!
Sint iste assumenda sit cumque minima beatae dolor, id enim. Consequatur quas, aliquid facilis sed, dolorem illo corrupti neque minus veniam veritatis saepe debitis pariatur consectetur. Incidunt beatae animi pariatur.
Quia beatae doloribus nemo, necessitatibus harum soluta quod voluptatem expedita! Ullam, soluta magni repudiandae cupiditate officia fuga saepe doloribus optio velit odio reiciendis officiis voluptates tenetur vitae mollitia consequuntur eius?
Corporis velit, culpa vero esse deleniti perspiciatis omnis temporibus incidunt nulla tempora qui repellat ullam. Voluptatum eligendi, eum soluta, error dolore architecto ipsam enim facilis libero recusandae explicabo! Laborum, commodi!
Fuga animi, veritatis ratione in architecto itaque maiores obcaecati ab magni beatae laboriosam voluptate cumque culpa sapiente blanditiis atque quae! Animi magnam magni quidem, qui numquam ipsam facilis laboriosam suscipit.
Reprehenderit dolores modi rem, odit provident asperiores recusandae delectus unde illo sint cum excepturi, alias neque sequi vel mollitia voluptatum eius consequatur ad culpa obcaecati explicabo beatae? Laboriosam, alias laborum?
Beatae optio corporis accusamus velit expedita quidem eius nemo eos, voluptatum, consectetur dolore ad cumque quod impedit similique quas mollitia eveniet id nulla modi earum non sequi. Mollitia, culpa repellendus?
Vel, voluptatum qui quisquam dolorum ad dolorem neque eos eum tempora, rerum consequuntur! Voluptate animi laudantium quos veritatis corporis qui aperiam optio eius, similique excepturi exercitationem dicta repellat, recusandae quo?
Ea deleniti exercitationem porro possimus quisquam est tenetur perferendis ullam! Dolores animi inventore, doloremque quisquam ipsa nesciunt, officiis illum eos quis a quidem repudiandae debitis amet tempore quibusdam qui natus.
Architecto, eveniet aut corporis perspiciatis distinctio impedit itaque recusandae voluptates modi? Cum maiores facere, ut blanditiis qui reiciendis molestiae ea maxime accusantium. Vero delectus quos aut adipisci at a ipsa.
Neque voluptatibus voluptates quisquam corrupti sit sapiente blanditiis repellendus quidem, deleniti, aperiam animi? Asperiores, molestias beatae, adipisci nobis iure dolor unde deleniti blanditiis necessitatibus assumenda facilis iusto suscipit magnam alias.
Reprehenderit, molestias doloremque quas est odit itaque. Saepe nisi quas sequi earum? Recusandae saepe sit aliquid at quisquam dignissimos laborum illo consequuntur corporis, aliquam blanditiis tenetur ratione repellendus doloribus harum!
Molestiae, nisi? Fugit quisquam dolorem, libero accusantium, nulla corporis, nisi sunt ut atque deleniti cumque odit quaerat ipsa possimus perspiciatis laboriosam ipsam velit porro reprehenderit dignissimos eaque ipsum. Facilis, eaque?
Quaerat atque provident, labore in id omnis harum deleniti vero eligendi velit inventore, dignissimos minima reprehenderit minus beatae tenetur? Consequatur error earum ratione mollitia possimus commodi iste delectus quas unde.
Illo vero dolore, voluptatibus neque minima dolorum! Similique cupiditate sapiente consequuntur, cum sint explicabo repudiandae commodi veniam, eum pariatur ratione sed distinctio aspernatur ut animi tempora facilis aliquid neque voluptates.
Incidunt tempora amet aliquid in doloremque voluptas asperiores ipsa, facere commodi pariatur magni deleniti perspiciatis quaerat. Repudiandae mollitia quos quaerat placeat, molestias sed dolore, optio ducimus quae ipsam architecto perspiciatis.
Recusandae magni facilis eveniet qui sunt atque, consequatur a! Aliquam sapiente ab eos incidunt, temporibus ducimus numquam perspiciatis architecto qui provident optio amet assumenda distinctio quasi? Atque in earum iure.
Sunt eaque iure non totam error porro dolorum voluptatum possimus aliquid maiores molestiae sit vitae expedita earum doloremque provident labore, inventore sint recusandae unde soluta esse. Labore aperiam porro pariatur!
Dignissimos, natus saepe quam inventore nostrum ex perferendis earum quidem. Architecto aspernatur a, libero alias itaque ex perferendis, quod aliquam aperiam quibusdam delectus doloremque obcaecati sint velit illum quidem temporibus.
Amet hic odio nostrum corporis ut tempora velit incidunt, voluptatum reprehenderit inventore repellat, pariatur dolorum consequatur deleniti molestias obcaecati distinctio magnam. Suscipit debitis, et voluptatem ea accusamus omnis non maiores?
Recusandae quae consequuntur aliquid ab temporibus voluptate est quidem libero explicabo quo asperiores mollitia porro fugit, excepturi corrupti? Illo praesentium natus saepe repellendus delectus, a dolores corrupti hic perspiciatis maiores?
Minima iste cumque ad dignissimos distinctio nobis minus, earum quos eligendi deleniti nostrum rerum delectus veritatis ullam ea obcaecati laudantium ab officia iusto esse at sint quisquam! Enim, porro vero.
Consequatur qui, laborum maiores error adipisci corporis iure corrupti, deserunt dolore fugit nostrum quisquam quis quos officia ratione vero cupiditate porro commodi explicabo impedit nihil. Soluta veniam hic enim consequatur!
Pariatur, beatae. Quasi asperiores iste possimus minima ab corrupti voluptate deleniti nostrum repudiandae architecto voluptates est doloribus quod sed, aliquid consectetur porro excepturi ex voluptas libero deserunt eveniet numquam nihil.
Esse aliquid quo reiciendis cumque. Laboriosam culpa vero ex deleniti dolorum praesentium corrupti veritatis. Eius ullam dolore aperiam natus aspernatur dolores magni illo, at ad impedit voluptatum omnis optio molestiae.
Ullam, repudiandae saepe quidem quos odio distinctio dicta impedit ea? Alias dolores nisi, porro aspernatur perspiciatis ex explicabo iusto assumenda, modi eligendi quis, veniam veritatis aut corrupti architecto. Voluptatum, sit!
Impedit soluta laudantium cumque dolore, labore error molestias rerum veritatis libero, nemo doloribus vero autem sapiente ut. Excepturi, quae. Esse iste tempora accusantium? Adipisci ipsum pariatur reprehenderit, perferendis temporibus illum.
Fuga suscipit ea iste pariatur laborum, beatae, ad, aliquam sapiente ex recusandae totam accusamus itaque! Aspernatur, maiores aliquam harum quisquam voluptatem repudiandae dolore cum qui aut? Doloremque dicta vel exercitationem?
Perspiciatis laboriosam, provident nesciunt tempore voluptatibus expedita quos quasi vel saepe recusandae, id debitis illo quidem quas veniam. Rem tempore vero rerum nihil harum autem saepe corporis repellendus blanditiis maxime.
Delectus saepe eum, impedit assumenda quo fugiat ab illum ipsam quisquam, dolore voluptates eveniet. Distinctio a quis voluptate illum, aperiam autem deserunt repudiandae quos quibusdam facere libero beatae adipisci ipsam?
Error eius vitae veritatis perspiciatis quod, fugit fuga reprehenderit quam, nam eligendi accusantium officiis, id quia dicta voluptas? Accusantium est aut consequuntur vero quis at beatae ducimus aspernatur, quibusdam doloremque!
Culpa, provident consequatur, ut optio hic quod voluptate eos assumenda voluptates officia doloremque maiores magni expedita quis, est nesciunt ea! Molestias, dolorum maiores ad suscipit saepe ipsa quis? Error, explicabo.
Enim dicta ipsa doloribus mollitia consequatur alias suscipit ipsam, ab dolor sequi facere. Necessitatibus sapiente commodi explicabo. Eum maiores enim aperiam voluptatem dignissimos eligendi! Quam rerum sequi placeat tempore quaerat?

    `;
body?.append(texto);

const progresbar = document.createElement('div');
progresbar.setAttribute("class", "progress-bar");
body?.append(progresbar);

const scrollporcentaje = (docElem: any) => {
    let scrollTop = docElem.scrollTop;
    let scrollHeight = docElem.scrollHeight;
    let clientHeight= docElem.clientHeight;

    return (scrollTop/(scrollHeight-clientHeight))*100;
}

//* streams
const scroll$ = fromEvent<MouseEvent>(document, 'scroll');

scroll$.pipe(
    pluck('target','documentElement'),
    map((docelem)=> scrollporcentaje(docelem)),
    tap(console.log)
).subscribe({
    next: (porcentaje) => {
        progresbar.style.width = `${porcentaje}%`;
    }
})
