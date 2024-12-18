function goBack() {
    // Hide details page and show events grid
    document.querySelector('.details-container').style.display = 'none';
    document.querySelector('.container').style.display = 'block';
}
let modalImages = []; // مصفوفة الصور للـ modal
let currentImageIndex = 0; // فهرس الصورة الحالية في الـ modal

// فتح الـ modal لعرض الصورة
function openModal(index) {
    currentImageIndex = index;
    document.getElementById('modal-image').src = modalImages[index];
    document.getElementById('image-modal').style.display = 'flex'; // إظهار الـ modal
}

// إغلاق الـ modal
function closeModal() {
    document.getElementById('image-modal').style.display = 'none'; // إخفاء الـ modal
}

// تغيير الصورة بناءً على الاتجاه (يمين أو يسار)
function changeImage(direction) {
    currentImageIndex = (currentImageIndex + direction + modalImages.length) % modalImages.length;
    document.getElementById('modal-image').src = modalImages[currentImageIndex];
}

// تحميل الصور في الـ modal عندما يتم اختيار الحدث
function openDetailsPage(eventName) {
    document.querySelector('.container').style.display = 'none';
    const detailsPage = document.querySelector('.details-container');
    const eventTitle = document.getElementById('event-title');
    const eventDescription = document.getElementById('event-description');
    let imagesContainer = document.getElementById('images-container');

    if (!imagesContainer) {
        imagesContainer = document.createElement('div');
        imagesContainer.id = 'images-container';
        imagesContainer.style.display = 'grid';
        imagesContainer.style.gridTemplateColumns = 'repeat(auto-fit, minmax(200px, 1fr))';
        imagesContainer.style.gap = '15px';
        imagesContainer.style.marginTop = '20px';
        detailsPage.appendChild(imagesContainer);
    }

    imagesContainer.innerHTML = '';
    modalImages = [];

    
    imagesContainer.innerHTML = '';
    modalImages = [];
    
    if (eventName === 'Event 1') {
        eventTitle.innerHTML = `<h2> Borg El Arab Technology University Collaborates with the Industrial Sector to Enhance Employment and Training Opportunities </h2><br><br>`;
        eventDescription.innerHTML  = `
        Alexandria – December 17, 2024 – <br><br>Borg El Arab Technology University announced its collaboration with the industrial sector through its Industrial Advisory Board to better align educational outcomes with labor market needs.<br><br>
        Dr. Alaa Arafa, Dean of the College of Industry and Energy Technology, presented an overview of the college’s academic programs and the importance of practical training for students.<br><br>
        Dr. Mohamed Morsy El-Gohary, President of the University, highlighted the collaboration’s role in providing training and employment opportunities, noting the success of the recent job fair, which resulted in 150 job opportunities and 500 training placements.<br><br>
        Public Relations and Media Department<br>
        Official Spokesperson
    `;
    
        const imageSources = [
            "/event 1/470234063_553590870847076_5275848710021747364_n.jpg",
            "/event 1/470234063_553590870847076_5275848710021747364_n.jpg",
            "/event 1/470234815_553590197513810_5403420888343342696_n.jpg",
            "/event 1/470238381_553590550847108_6788126733938116699_n.jpg",
            "/event 1/470240685_553590077513822_5965018523380920508_n.jpg",
            "/event 1/470514539_553590860847077_4066986951938476874_n.jpg",
            "/event 1/470563186_553591427513687_3033517571762791311_n.jpg",
            "/event 1/470566241_553591260847037_1121760149883305028_n.jpg",
            "/event 1/470567355_553590090847154_4993135909658269109_n.jpg",
            "/event 1/470568010_553591270847036_1521001813629017410_n.jpg",
            "/event 1/470574732_553591120847051_4976666236998797998_n.jpg",
            "/event 1/470660946_553591294180367_7791642118962717800_n.jpg",
            "/event 1/470232342_553590557513774_2284385020046312502_n.jpg",
            "/event 1/470481520_553591330847030_4691500606027549489_n.jpg",
            "/event 1/470580652_553591107513719_7483952521605553437_n.jpg",
            "/event 1/470574698_553590184180478_2207772309075867391_n.jpg",
        ];
    
        imageSources.forEach((src, index) => {
            let img = document.createElement('img');
            img.src = src;
            img.alt = "Event Image";
            img.style.width = '100%';
            img.style.borderRadius = '10px';
            img.style.objectFit = 'cover';
            img.onclick = () => openModal(index);
            imagesContainer.appendChild(img);
            modalImages.push(src);
        });
    }
    
    else if (eventName === 'Event 2') {
        eventTitle.innerHTML = `<h2> Borg El Arab Technology University Hosts Art Exhibition to Showcase Student Talentsy </h2><br><br>`;
        eventDescription.innerHTML  = `
        Borg El Arab Technology University Hosts Art Exhibition to Showcase Student Talents<br>
        Borg El Arab - December 16, 2024<br><br>
        Borg El Arab Technology University organized an art exhibition under the supervision of the Youth Care Department, in coordination with the university's Student Union Art Committee, to showcase students' artistic talents.<br><br>
        Dr. Mohamed Morsy El-Gohary, President of the University, expressed his admiration for the students' talents and praised the level of creativity and quality, extending his thanks to the organizers of the event.<br><br>
        Dr. Ibrahim El-Fahham, Advisor to the President of the University, attended the exhibition and engaged with the displayed works.<br><br>
        Dr. Alaa Arafa, Dean of the College of Industry and Energy Technology, was also present and commended the students' artistic skills.<br><br>
        The exhibition was also attended by program coordinators and students who interacted with the displayed works, highlighting their peers' creativity.<br><br>
        Public Relations and Media Department<br>
        Official Spokesperson
    `;
    
    
        const imageSources = [
        "/event 2/470224076_553204334219063_8196270744731027034_n.jpg",
        "/event 2/470233948_553201600886003_6917998589690600743_n.jpg",
        "/event 2/470234113_553204130885750_3093654813075740931_n.jpg",
        "/event 2/470234287_553203177552512_7166585440647505460_n.jpg",
        "/event 2/470234732_553204357552394_4604696395744942188_n.jpg",
        "/event 2/470237294_553204080885755_3839839678371085516_n.jpg",
        "/event 2/470237331_553204047552425_8761828249907353530_n.jpg",
        "/event 2/470237333_553204397552390_2196304439205874497_n.jpg",
        "/event 2/470239118_553202227552607_2970783631561171919_n.jpg",
        "/event 2/470242654_553204317552398_2613299258180409301_n.jpg",
        "/event 2/470242796_553204387552391_4436993164142290908_n.jpg",
        "/event 2/470480079_553204220885741_5343726659623549966_n.jpg",
        "/event 2/470501739_553204277552402_7817969955857442255_n.jpg",
        "/event 2/470545423_553202110885952_1146473574045819855_n.jpg",
        "/event 2/470557762_553202304219266_2194511728512195581_n.jpg",
        "/event 2/470558392_553204004219096_5295089312825565263_n.jpg",
        "/event 2/470565884_553202427552587_1500760194608472791_n.jpg",
        "/event 2/470568266_553201617552668_2862660093144669597_n.jpg",
        "/event 2/470568908_553201557552674_8739549814214905368_n.jpg",
        "/event 2/470574191_553204014219095_1905035000605827811_n.jpg",
        "/event 2/470574893_553204140885749_1217910174429804710_n.jpg",
        "/event 2/470576618_553204377552392_565167392380164438_n.jpg",        
        "/event 2/470579282_553204347552395_3426126223782148067_n.jpg",
        "/event 2/470581161_553203287552501_6105793804725632554_n.jpg",
        "/event 2/470596162_553202844219212_2310378817628196685_n.jpg",
        "/event 2/470600431_553204167552413_5077373103417512878_n.jpg",
        "/event 2/470634688_553204204219076_5399498544962584720_n.jpg",
        "/event 2/470226290_553204244219072_5410270915888769949_n.jpg",
        "/event 2/470234753_553204290885734_3312104738417548947_n.jpg",
        "/event 2/470242616_553204110885752_3187244363890920268_n.jpg",
    
        ];
    
        imageSources.forEach((src, index) => {
            let img = document.createElement('img');
            img.src = src;
            img.alt = "Event 2 Image";
            img.style.width = '100%';
            img.style.borderRadius = '10px';
            img.style.objectFit = 'cover';
            img.onclick = () => openModal(index);
            imagesContainer.appendChild(img);
            modalImages.push(src);
        });
    }
    
    else if (eventName === 'Event 3') {
        eventTitle.innerHTML = `<h2> Borg El Arab Technology University Hosts Final Match of Football League at the College of Industry and Energy Technology </h2><br><br>`;
        eventDescription.innerHTML  =eventDescription.innerHTML  = `
        Borg El Arab, Egypt — December 16, 2024<br><br>
        Borg El Arab Technology University celebrated the final match of the football league organized by the College of Industry and Energy Technology, where the IT team won 2-0 against the Railway team.<br><br>
        Dr. Mohamed Morsy El-Gohary, President of the University, attended the match and praised the performance level.<br><br>
        Dr. Ibrahim El-Fahham, Advisor to the President of the University, was also present.<br><br>
        Dr. Alaa Arafa, Dean of the College of Industry and Energy Technology, followed the match.<br><br>
        Mr. Salem Faza, University Secretary-General, participated in the event.<br><br>
        Dr. Mohamed Ramadan, Vice Dean for Education and Student Affairs, was in attendance.<br><br>
        Dr. Osama Al-Nahas, Program Coordinator of Information Technology, attended as well.<br><br>
        Captain Essam El-Qadi, General Director of Youth Care, was present.<br><br>
        The Student Union played a significant role in organizing the tournament, with special thanks to:<br><br>
        Mohamed Yousry, President of the Student Union.<br><br>
        Mohamed El-Dessouki, Vice President of the Student Union.<br><br>
        Mahmoud Fathi, Head of the Higher Sports Committee.<br><br>
        Ahmed Khalifa, Head of the Sports Committee at the College of Industry and Energy Technology.<br><br>
        The IT team was awarded the trophy in celebration of their outstanding performance and team spirit.<br><br>
        Public Relations and Media Department<br>
        Official Spokesperson
    `;
    
    
        const imageSources = [
           "/event 3/470174808_553061197566710_5998390980323016841_n.jpg",
           "/event 3/470177525_553061170900046_7913501312097356343_n.jpg",
           "/event 3/470195179_553061764233320_7551662350565743891_n.jpg",
           "/event 3/470197294_553061237566706_1419090182051921768_n.jpg",
           "/event 3/470198648_553061110900052_7786881433048182325_n.jpg",
           "/event 3/470198826_553062084233288_2802567764812664051_n.jpg",
           "/event 3/470200440_553061397566690_5997355803291833437_n.jpg",
           "/event 3/470202648_553061370900026_1201231592179130534_n.jpg",
           "/event 3/470212198_553061344233362_9082671114323091339_n.jpg",
           "/event 3/470213583_553061264233370_8222354313683275122_n.jpg",
           "/event 3/470216230_553061477566682_531051834605114617_n.jpg",
            "/event 3/470223404_553061637566666_950704633094764974_n.jpg",          
            "/event 3/470225212_553061437566686_5894205734469727259_n.jpg",
           "/event 3/470232295_553061610900002_9079217357464327580_n.jpg",
           "/event 3/470234041_553061674233329_3306874874475308184_n.jpg",
           "/event 3/470234517_553061320900031_1200113936422743936_n.jpg",
           "/event 3/470245131_553061817566648_3373277478553213980_n.jpg",
           "/event 3/470480857_553061727566657_5933564983988192284_n.jpg",
           "/event 3/470505688_553062070899956_5452868115761325683_n.jpg",
           "/event 3/470577382_553061574233339_7309960596576520877_n.jpg",
           "/event 3/470578139_553062267566603_4062071200650369581_n.jpg",
        ];
    
        imageSources.forEach((src, index) => {
            let img = document.createElement('img');
            img.src = src;
            img.alt = "Event 2 Image";
            img.style.width = '100%';
            img.style.borderRadius = '10px';
            img.style.objectFit = 'cover';
            img.onclick = () => openModal(index);
            imagesContainer.appendChild(img);
            modalImages.push(src);
        });
    }
    else if (eventName === 'Event 4') {
        eventTitle.innerHTML = `<h2> Borg El Arab Technology University Participates in National Council for Women Conference Against Violence </h2><br><br>`;
        eventDescription.innerHTML  = eventDescription.innerHTML  = `
        Borg El Arab, December 16, 2024<br><br>
        In line with its commitment to supporting social issues and raising awareness about women's rights, Borg El Arab Technology University participated in the conference organized by the National Council for Women as part of the 16 Days Campaign to Combat Violence Against Women.<br><br>
        The conference was held under the patronage of Dr. Mohamed Morsy El-Gohary, President of the University and Head of the University's Anti-Violence Against Women Unit, and supervised by Dr. Rania El-Sharkawy, Dean of the College of Health Sciences Technology and Vice President of the Unit.<br><br>
        The university was represented at the conference by Dr. Rasha Ali Yaqout, Vice Dean of the College of Health Sciences Technology for Education and Student Affairs, and Dr. Asmaa Alaa, Coordinator of the Anti-Violence Against Women Unit.<br><br>
        A number of university students also attended to engage in discussions on important social issues.<br><br>
        The conference was chaired by Dr. Magda El-Shazly, Chairperson of the National Council for Women Alexandria Branch, with the presence of Eng. Zeinab Rashad, Chairperson of the National Council for Women Beheira Branch, and Dr. Shaimaa Naeem, Director of Strategic Administration and Coordinator of the Anti-Violence Against Women Units at the Council.<br><br>
        Dr. Magda El-Shazly highlighted the Council's efforts locally and internationally in supporting women's rights.<br><br>
        Eng. Zeinab Rashad discussed the importance of raising awareness in remote areas.<br><br>
        Dr. Shaimaa Naeem focused on the role of complaint units in universities and the importance of cooperation between the Council and university units to achieve the campaign's goals.<br><br>
        The conference concluded with key recommendations to strengthen cooperation between universities and the Council, including organizing joint workshops and raising student awareness about violence and how to address it.<br><br>
        Borg El Arab Technology University continues its support for national and community efforts to combat violence against women and is committed to promoting equality in society.<br><br>
        Public Relations and Media Department<br>
        Official Spokesperson
    `;
    
    
    
        const imageSources = [
            "/event 4/470517360_552809117591918_2859548776702178190_n.jpg",
            "/event 4/470214689_552809070925256_5690934952875257845_n (1).jpg",
            "/event 4/470652760_552809127591917_59739645091361415_n.jpg",
            "/event 4/470224011_552809077591922_5230212051213860572_n.jpg",
            "/event 4/470240651_552809497591880_9010848998370825160_n.jpg",
            "/event 4/470590574_552809484258548_1195301998967406825_n.jpg",
            "/event 4/470608392_552809100925253_7219310257493426428_n (1).jpg",
            "/event 4/470657652_552809087591921_1804404069104879815_n.jpg",
        ];
    
        imageSources.forEach((src, index) => {
            let img = document.createElement('img');
            img.src = src;
            img.alt = "Event 2 Image";
            img.style.width = '100%';
            img.style.borderRadius = '10px';
            img.style.objectFit = 'cover';
            img.onclick = () => openModal(index);
            imagesContainer.appendChild(img);
            modalImages.push(src);
        });
    }
    else if (eventName === 'Event 5') {
        eventTitle.innerHTML = `<h2> Borg El Arab Technology University Honors the Sports Activities of Industry and Energy Technology College Students </h2><br><br>`;
        eventDescription.innerHTML  = eventDescription.innerHTML  = `
        Alexandria, Egypt – December 15, 2024<br>
        Borg El Arab Technology University held a special ceremony to honor the outstanding sports achievements of Industry and Energy Technology College students, under the leadership of Dr. Mohamed Morsy El-Gohary, President of the University.<br><br>
        The ceremony was organized and supervised by the Youth Care Department, with the presence of several key university figures:<br><br>
        Dr. Mohamed Morsy El-Gohary, President of the University.<br><br>
        Dr. Ibrahim El-Fahham, Advisor to the President of the University.<br><br>
        Dr. Alaa Arafa, Dean of the College of Industry and Energy Technology.<br><br>
        Dr. Mohamed Ramadan, Vice Dean for Education and Student Affairs.<br><br>
        Heads of academic departments.<br><br>
        The students were honored for their remarkable achievements in individual and team sports, showcasing excellent skills and sportsmanship, making them a source of pride for the university community.<br><br>
        Students who won competitions and contributed to community activities within the university were also recognized.<br><br>
        Captain Essam El-Qadi, Director of Youth Care, Captain Mustafa El-Mogui, Sports Specialist, Mr. Islam El-Shamsi, Technical Specialist, and Ms. Mai, Social Specialist, were honored for their valuable contributions and the excellent results achieved by the Youth Care Department.<br><br>
        University leaders and faculty members praised the significant role of the Youth Care Department in enriching students' experiences outside the classroom, promoting physical activity, and contributing to the holistic development of students.<br><br>
        Public Relations and Media Department<br>
        Official Spokesperson
    `;
    
    
    
    
        const imageSources = [
           "/event 5/470222236_552565084282988_3649502729526229529_n.jpg",
           "/event 5/470222791_552564900949673_4138033174200784211_n.jpg",
           "/event 5/470226246_552564750949688_2749498200774722409_n.jpg",
           "/event 5/470227344_552564837616346_4283953476791834029_n.jpg",
           "/event 5/470228711_552565197616310_6056970126854076062_n.jpg",
           "/event 5/470230174_552564990949664_8090733980006709842_n.jpg",
           "/event 5/470232566_552565070949656_7043552117385522876_n.jpg",
           "/event 5/470232570_552564810949682_8274874835102868030_n.jpg",
           "/event 5/470237330_552565130949650_7695619010335092131_n.jpg",
           "/event 5/470239384_552564460949717_513827949022353695_n.jpg",
           "/event 5/470240664_552565047616325_762108655742847340_n.jpg",
           "/event 5/470241530_552565347616295_453379024096739493_n.jpg",
           "/event 5/470247275_552565110949652_5742955808074198479_n.jpg",
           "/event 5/470477337_552565004282996_4231213156148765090_n.jpg",
           "/event 5/470530319_552564104283086_6957577541566898189_n.jpg",
           "/event 5/470557740_552565177616312_4487772119873102585_n.jpg",
           "/event 5/470562471_552565210949642_1013978911046596603_n.jpg",
           "/event 5/470564187_552564704283026_8179817005143021161_n.jpg",
           "/event 5/470568897_552565150949648_407043402616996567_n.jpg",
           "/event 5/470569348_552565094282987_763686594756341895_n.jpg",
           "/event 5/470570280_552565144282982_6426080777397537924_n.jpg",
           "/event 5/470573173_552564867616343_4397036396504648877_n.jpg",
           "/event 5/470573661_552564770949686_5358635939795127439_n.jpg",
           "/event 5/470577401_552565137616316_9043095160793100887_n.jpg",
           "/event 5/470579279_552565027616327_7986047888047574402_n.jpg",
           "/event 5/470579371_552564917616338_5895180734581762426_n.jpg",
           "/event 5/470592922_552564937616336_3622774210636923184_n.jpg",
           "/event 5/470596359_552564734283023_5856753393616228232_n.jpg",
           "/event 5/470635106_552565167616313_8302798554413875133_n.jpg",
        ];
    
        imageSources.forEach((src, index) => {
            let img = document.createElement('img');
            img.src = src;
            img.alt = "Event 2 Image";
            img.style.width = '100%';
            img.style.borderRadius = '10px';
            img.style.objectFit = 'cover';
            img.onclick = () => openModal(index);
            imagesContainer.appendChild(img);
            modalImages.push(src);
        });
    }
    else if (eventName === 'Event 6') {
        eventTitle.innerHTML = `<h2> Borg Al Arab Technical University Wins 16 Medals in the Republic Championship for Individual Sports  </h2><br><br>`;
        eventDescription.innerHTML =eventDescription.innerHTML  = `
        Alexandria – December 15, 2024<br><br>
        Borg Al Arab Technical University achieved a remarkable sports accomplishment at the Republic Championship for Individual Sports during the Friendship Tournament organized by the Ministry of Higher Education and Scientific Research last November.<br><br>
        The university won 16 diverse medals in various sports, reflecting the outstanding level of the university’s student-athletes and the intensive training they receive. The results are as follows:<br><br>
        
        1. Swimming Team (11/7/2024):<br><br>
        Anas Ahmed Mohamed: First place and gold medal in the 100-meter mono race 🥇, fourth place in the 50-meter mono race.<br><br>
        Mohamed Farid Saad: Fourth place in the 50-meter double fins race.<br><br>
        Marwan Samir Ramzi: Fourth place in the 50-meter backstroke race.<br><br>
        The team consisting of Anas Ahmed Mohamed, Mohamed Farid Saad, Marwan Samir Ramzi, and Mohamed El Desouki: Third place and bronze medal in the 4x100-meter freestyle relay 🥉.<br><br>
    
        2. Kung Fu Team (14-15/11/2024):<br><br>
        Esraa Mohamed Fathallah: First place and gold medal in the 75 kg category 🥇.<br><br>
        Menatallah Mohamed Abdel-Azim: Second place and silver medal in the 60 kg category 🥈.<br><br>
        Jasser Mohamed Hussein: Second place and silver medal in the +90 kg category 🥈.<br><br>
        Marwan Ismail Marshedi: Second place and silver medal in the 70 kg category 🥈.<br><br>
        Mohamed Ashraf Suleiman: Third place and bronze medal in the 75 kg category 🥉.<br><br>
        The university’s Kung Fu team also won the tournament cup 🏆 in its first participation in the Republic Championship for Individual Sports.<br><br>
    
        3. Athletics Team (17/11/2024):<br><br>
        Youssef Ahmed Mabrouk: Fourth place in the running competition.<br><br>
    
        4. Taekwondo Team (19/11/2024):<br><br>
        Hoda Fathi Mohamed: Third place and bronze medal in the 71 kg category 🥉.<br><br>
    
        5. Cycling Team (24/11/2024):<br><br>
        Bassant Magdy Marcus: Third place and bronze medal 🥉.<br><br>
    
        6. Wrestling Team (25/11/2024):<br><br>
        Abdullah Mohamed Abd Rabeh: First place and gold medal in the 82 kg category 🥇.<br><br>
        Abdulrahman Ahmed Mustafa: First place and gold medal in the 77 kg category 🥇.<br><br>
        Abdullah Mohamed Ahmed: Second place and silver medal in the 60 kg category 🥈.<br><br>
        Mohamed Haitham Ibrahim: Third place and bronze medal in the 82 kg category 🥉.<br><br>
        Mohamed Shaaban Shehata: Fourth place in the 70 kg category.<br><br>
    
        Team Sports Results:<br><br>
        Borg Al Arab Technical University’s teams (football 11, futsal, volleyball, basketball, handball) participated in the Friendship Tournament for the Western Delta Region from November 23 to 30, 2024, held at the Youth City in Abu Qir and the covered hall of Al-Ittihad Alexandria Club.<br><br>
        The team sports teams achieved excellent results:<br><br>
        The volleyball team (male students): Third place.<br><br>
        The basketball team (female students): Third place.<br><br>
        The futsal team (female students): Third place.<br><br>
        The university students achieved second and third places in the Friendship Marathon.<br><br>
    
        Statements from University Leadership:<br><br>
        Dr. Mohamed Morsy El-Gohary, President of Borg Al Arab Technical University:<br><br>
        "We are proud of this great achievement, which is the result of our students' efforts and the support of university sports. The university always strives to encourage students to participate in sports activities, which enhances their physical skills and team spirit."<br><br>
    
        Captain Essam El-Qadi, Director of the Youth Welfare Department:<br><br>
        "The success achieved by our students is the result of teamwork and the continuous efforts of the Youth Welfare Department. We always aim to provide full support to students in sports activities and will continue to improve these activities."<br><br>
    
        Dr. Ibrahim El-Faham, University President Advisor:<br><br>
        "Supporting sports activities is a fundamental part of our mission to develop students. The results of this tournament reflect the high level of professionalism our students have reached in various sports."<br><br>
    
        Public Relations and Media Department<br>
        Official Spokesperson
    `;
    
    
    
        const imageSources = [
            "/event 6/470208721_552342657638564_5429107965574923020_n.jpg",
            "/event 6/470228695_552337380972425_6282094968273587123_n.jpg",
            "/event 6/470229373_552337590972404_83247957019540400_n.jpg",           
            "/event 6/470232262_552353007637529_3257776750384605106_n.jpg",
            "/event 6/470234060_552342434305253_1198343970708447532_n.jpg",
            "/event 6/470238383_552342730971890_3725764654920671763_n.jpg",
            "/event 6/470240676_552352880970875_5701116585522159328_n.jpg",
            "/event 6/470241474_552342524305244_4045508067280603724_n.jpg",
            "/event 6/470242654_552342497638580_176520814040696243_n.jpg",            
            "/event 6/470247822_552352864304210_5228166653554471157_n.jpg",
            "/event 6/470476606_552352994304197_516897618995588712_n.jpg",            
            "/event 6/470476714_552341457638684_6373708593946271570_n.jpg",
            "/event 6/470486547_552352924304204_4218325534154203858_n.jpg",
            "/event 6/470506532_552342067638623_2886038306852619095_n.jpg",
            "/event 6/470555287_552342600971903_2719342809302301944_n.jpg",
            "/event 6/470564557_552342614305235_575517948733868346_n.jpg",            
            "/event 6/470583423_552342714305225_2664095260674159270_n.jpg",
            "/event 6/470589458_552342164305280_163132288399407525_n.jpg",            
            "/event 6/470657656_552342060971957_3458538548612514481_n.jpg",
            "/2 event 6/470558906_552353150970848_3204156437019384071_n.jpg",
            "/2 event 6/470572904_552340897638740_3048739757976898405_n.jpg",
            "/2 event 6/470565866_552342180971945_1314334144288189295_n.jpg",
            "/2 event 6/470232272_552342257638604_8411380309147316899_n.jpg",
            "/2 event 6/470222432_552342414305255_8234320947393836423_n.jpg",
            "/2 event 6/470213580_552342707638559_2651061598936860220_n.jpg",
            "/2 event 6/470200502_552352934304203_1699810482637919511_n.jpg",
            "/2 event 6/470215519_552353107637519_8174757364101002850_n.jpg",
            "/2 event 6/470234972_552342220971941_8245304545316711332_n.jpg",
            "/2 event 6/470233349_552341917638638_8543380136323567337_n.jpg",
        ];
    
        imageSources.forEach((src, index) => {
            let img = document.createElement('img');
            img.src = src;
            img.alt = "Event 2 Image";
            img.style.width = '100%';
            img.style.borderRadius = '10px';
            img.style.objectFit = 'cover';
            img.onclick = () => openModal(index);
            imagesContainer.appendChild(img);
            modalImages.push(src);
        });
    }
    else if (eventName === 'Event 7') {
        eventTitle.innerHTML = `<h2> Borg El Arab Technological University in the Grand Egyptian Museum Hackathon – 2nd Edition GEM Hackathon- 2nd Edition 2024</h2><br><br>`;
        eventDescription.innerHTML =eventDescription.innerHTML = `

        Under the patronage of:<br><br>
        • Prof. Dr. Mohamed Morsi El Gohary, President of Borg El Arab Technological University.<br>
        • Dr. Ahmed Ghoneim, CEO of the Grand Egyptian Museum.<br>
        • Prof. Dr. Gina El Feki, President of the Academy of Scientific Research and Technology.<br><br>
    
        Under the supervision of:<br><br>
        • Prof. Dr. Ibrahim El Fahham, Advisor to the President of the University.<br>
        • Prof. Dr. Rania El Sharkawy, Dean of the Faculty of Health Sciences Technology.<br>
        • Prof. Dr. Alaa Arafa, Dean of the Faculty of Industrial and Energy Technology.<br>
        • Prof. Dr. Amira Darwish, Coordinator of the Food Manufacturing Technology Program and Executive Director of the E-Club BATU Entrepreneurship Club.<br><br>
    
        Borg El Arab Technological University participated in the Grand Egyptian Museum Hackathon in its second edition GEM Hackathon- 2nd Edition 2024, held to promote awareness of the heritage of Ancient Egyptian civilization.<br><br>
    
        The training program involved raising youth awareness of their heritage, while also building their innovation capabilities. The university’s student team presented an idea to improve the tourist experience by developing the Ramsis Photo Booth Kiosk, aimed at enhancing visitors’ experience and encouraging tourists of all ages to visit the Grand Egyptian Museum in Giza, thereby boosting tourism.<br><br>
    
        The judging panel praised the performance and idea of the Borg El Arab Technological University team, noting that it was an innovative idea that supports the purpose of the training program. They emphasized that it will contribute to increasing tourism attraction to Egypt in general and to the museum in particular.<br><br>
    
        Prof. Dr. Mohamed Morsi El Gohary, President of the University, expressed special interest in preserving and promoting Egyptian civilization, reflecting his continuous commitment to involving students in all related training programs. He reiterated that youth are the foundation of Egypt’s future.<br><br>
    
        It is worth mentioning that Borg El Arab Technological University was the only technological university that participated in this training program, which was held from December 3 to 4, 2024. This was followed by the closing camp from December 10 to 12, 2024, which included an overnight stay at the museum.<br><br>
    
        Public Relations and Media Department<br>
        Media Officer
    `;
    
    
        const imageSources = [
        "/event 7/470168192_551154431090720_5936461011673720941_n.jpg",
        "/event 7/470179652_551153657757464_2559165359489952947_n.jpg",
        "/event 7/470184905_551153221090841_3399148142808478461_n.jpg",
        "/event 7/470192331_551154451090718_6281010883176994451_n.jpg",
        "/event 7/470193328_551154331090730_588571336190897442_n.jpg",
        "/event 7/470227134_551153944424102_6002746431558707807_n.jpg",
        "/event 7/470209329_551154401090723_8841356680986505873_n.jpg",
        ];
    
        imageSources.forEach((src, index) => {
            let img = document.createElement('img');
            img.src = src;
            img.alt = "Event 2 Image";
            img.style.width = '100%';
            img.style.borderRadius = '10px';
            img.style.objectFit = 'cover';
            img.onclick = () => openModal(index);
            imagesContainer.appendChild(img);
            modalImages.push(src);
        });
    }
    else if (eventName === 'Event 8') {
        eventTitle.innerHTML = `<h2> Borg El Arab Technological University Organizes the First Employment and Training Forum for Its Students and Graduates </h2><br><br>`;
        eventDescription.innerHTML = `
    
        Borg El Arab, December 9, 2024<br><br>
    
        Borg El Arab Technological University organized the first employment and training forum for its students and graduates in collaboration with the Entrepreneurship Development Association, and funded by the "Ready for Tomorrow" project of Plan International Egypt. The forum featured around 30 industrial and healthcare companies and institutions offering job opportunities and training for university students.<br><br>
    
        Prof. Dr. Mohamed Morsi El Gohary, President of the university, opened the forum and expressed his pleasure in organizing this significant event, highlighting it as an important step in preparing students and graduates for the evolving labor market.<br><br>
    
        Prof. Dr. Ibrahim El Fahham, Advisor to the President of the university, emphasized that the forum strengthens partnerships with industrial institutions and aims to develop students' skills.<br><br>
    
        Lieutenant General Mohamed Nassar, Deputy Commander of the Northern Region, praised the role of Borg El Arab Technological University in organizing the forum and supporting youth development.<br><br>
    
        Prof. Dr. Rania El Sharkawy, Dean of the Faculty of Health Sciences Technology, highlighted the forum's importance in providing students and graduates the opportunity to engage with employers.<br><br>
    
        Prof. Dr. Alaa Arafa, Dean of the Faculty of Industrial and Energy Technology, mentioned the importance of presenting students to the labor market, especially in the rapidly advancing industrial and technological sectors.<br><br>
    
        Prof. Dr. Omaima El Sheikh, Chairwoman of the Entrepreneurship Development Association, stated that the "Ready for Tomorrow" project exemplifies a successful partnership to support and guide youth toward a better future.<br><br>
    
        Ms. Eman Abdel Hakim, Project Manager at the association, emphasized that the project aims to empower and prepare youth for the job market.<br><br>
    
        At the end of the forum, a cooperation protocol was signed between the university and "Kim Tech" laboratory equipment company to enhance collaboration between the academic and private sectors.
    `;
    
    
    
      const imageSources = [
        "/event 8/FB_IMG_1733869365326.jpg",
        "/event 8/FB_IMG_1733869367008.jpg",
        "/event 8/FB_IMG_1733869368470.jpg",
        "/event 8/FB_IMG_1733869371661.jpg",
        "/event 8/FB_IMG_1733869397436.jpg",
        "/event 8/FB_IMG_1733869398951.jpg",
        "/event 8/FB_IMG_1733869400861.jpg",
        "/event 8/FB_IMG_1733869402834.jpg",
        "/event 8/FB_IMG_1733869404614.jpg",
        "/event 8/FB_IMG_1733869406525.jpg",
        "/event 8/FB_IMG_1733869408319.jpg",
        "/event 8/FB_IMG_1733869414249.jpg",
        "/event 8/FB_IMG_1733869416038.jpg",
        "/event 8/FB_IMG_1733869435336.jpg",
        "/event 8/FB_IMG_1733869437191.jpg",
        "/event 8/FB_IMG_1733869496645.jpg",
        "/event 8/FB_IMG_1733869500101.jpg",
        "/event 8/FB_IMG_1733869501891.jpg",
        "/event 8/FB_IMG_1733869503481.jpg",
        "/event 8/FB_IMG_1733869505117.jpg",
        "/event 8/FB_IMG_1733869506943.jpg",
        "/event 8/FB_IMG_1733869508692.jpg",
        "/event 8/FB_IMG_1733869510266.jpg",
        "/event 8/FB_IMG_1733869511876.jpg",
        "/event 8/FB_IMG_1733869513404.jpg",
        "/event 8/FB_IMG_1733869514854.jpg",
        "/event 8/FB_IMG_1733869516252.jpg",
        "/event 8/FB_IMG_1733869517958.jpg",
        "/event 8/FB_IMG_1733869520907.jpg",
        "/event 8/FB_IMG_1733869523507.jpg",
        "/event 8/FB_IMG_1733869524961.jpg",
        "/event 8/FB_IMG_1733869526485.jpg",
        "/event 8/FB_IMG_1733869527901.jpg",
        "/event 8/FB_IMG_1733869529270.jpg",
        "/event 8/FB_IMG_1733869531067.jpg",
        "/event 8/FB_IMG_1733869532833.jpg",
        "/event 8/FB_IMG_1733869534201.jpg",
        "/event 8/FB_IMG_1733869537565.jpg",
        "/event 8/FB_IMG_1733869540515.jpg",
        "/event 8/FB_IMG_1733869542284.jpg",
        "/event 8/FB_IMG_1733869543845.jpg",
        "/event 8/FB_IMG_1733869545577.jpg",
        "/event 8/FB_IMG_1733869547252.jpg",
        "/event 8/FB_IMG_1733869548910.jpg",
        "/event 8/FB_IMG_1733869550591.jpg",
        "/event 8/FB_IMG_1733869551992.jpg",
        "/event 8\IMG_1.jpg",
        ];
    
        imageSources.forEach((src, index) => {
            let img = document.createElement('img');
            img.src = src;
            img.alt = "Event 2 Image";
            img.style.width = '100%';
            img.style.borderRadius = '10px';
            img.style.objectFit = 'cover';
            img.onclick = () => openModal(index);
            imagesContainer.appendChild(img);
            modalImages.push(src);
        });
    }
    else if (eventName === 'Event 9') {
        eventTitle.innerHTML = `<h2> Borg El Arab Technological University and Bahya Foundation Discuss Cooperation to Serve Cancer Patients</h2><br><br>`;
        eventDescription.innerHTML =eventDescription.innerHTML = `
    
        Alexandria – December 7, 2024<br><br>
    
        As part of its social responsibility, the Faculty of Health Sciences Technology at Borg El Arab Technological University organized a visit to the Bahya Foundation’s Sheikh Zayed branch, under the patronage of Prof. Dr. Mohamed Morsi El Gohary, President of the University, and the supervision of Prof. Dr. Rania El Sharkawy, Dean of the Faculty.<br><br>
    
        The visit included participation from faculty members and students, where they learned about the comprehensive services Bahya Foundation provides to women battling cancer. Additionally, the university’s academic programs in health sciences technology were presented. The visit resulted in an initial agreement to sign a cooperation protocol between the university and the foundation to exchange expertise and provide practical training opportunities for students, as well as conduct joint research in cancer patient care.<br><br>
    
        Prof. Dr. Mohamed Morsi El Gohary, President of the University, emphasized the university’s commitment to supporting cancer patients. Prof. Dr. Rania El Sharkawy highlighted the importance of the collaboration in graduating qualified professionals who can contribute to the development of Egypt's healthcare sector.<br><br>
    
        Dr. Mohamed Amara, Executive Director of Bahya Foundation, expressed his happiness with the collaboration, stressing the importance of partnerships between the academic and civil sectors to tackle the challenges posed by cancer. He praised the high quality of academic programs offered by the university's Faculty of Health Sciences Technology, noting their significance in meeting the needs of the labor market.<br><br>
    
        The visit also included a tour of Bahya Hospital, where the delegation observed the latest technologies used in cancer treatment and visited the Warrior Products Exhibition, which aims to provide economic and psychological support to cancer patients.<br><br>
    
        The visiting team included:<br><br>
    
        Prof. Dr. Rasha Yaqout, Vice Dean of the Faculty of Health Sciences Technology<br>
        Dr. Sabreen Khattab, Head of the Healthcare Technology Department<br>
        Dr. Said Awad, Head of the Health Informatics Department<br>
        Eng. Mai Ali, Department of Healthcare Technology<br>
        Eng. Rawan Basel, Department of Health Informatics<br>
        Several students from the second and third years of the faculty.<br><br>
    
        Public Relations and Media Department<br>
        Official Spokesperson<br><br>
    
        #Bahya_The_Strength_of_Egyptian_Women
    `;
    
    
    
      const imageSources = [
          "/event 9/FB_IMG_1733873145545.jpg",
          "/event 9/FB_IMG_1733873149050.jpg",
          "/event 9/FB_IMG_1733873151999.jpg",
          "/event 9/FB_IMG_1733873155124.jpg",
          "/event 9/FB_IMG_1733873157180.jpg",
          "/event 9/IMG_2.jpg",
          "/event 9/IMG_3.jpg",
          "/event 9/FB_IMG_1733873139556.jpg",
          "/event 9/FB_IMG_1733873159135.jpg",
        ];
    
        imageSources.forEach((src, index) => {
            let img = document.createElement('img');
            img.src = src;
            img.alt = "Event 2 Image";
            img.style.width = '100%';
            img.style.borderRadius = '10px';
            img.style.objectFit = 'cover';
            img.onclick = () => openModal(index);
            imagesContainer.appendChild(img);
            modalImages.push(src);
        });
    }
    detailsPage.style.display = 'grid';
}