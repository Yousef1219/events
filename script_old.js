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
    
    if (eventName === 'Event 1') {
        eventTitle.innerHTML = `<h2> The First Information Technology Exhibition at the Universit </h2><br><br>`;
        eventDescription.innerHTML  = `
        Under the patronage of:<br><br>
        Prof. Dr. Mohamed Morsi El-Gohary – President of Borg El Arab Technical University<br><br>
        Prof. Dr. Ibrahim El-Fahham – Dean of the College of Technology, Industry, and Energy<br><br>
        Dr. Osama El-Nahas – Head of the Information Technology Program<br><br>
        Dr. Nehal El-Azly<br><br><br>
        The exhibition featured 52 innovative projects from our dear students in various fields of Information Technology.`;
    
        const imageSources = [
            "/المعرض الاول/1734012520078.jpg",
            "/المعرض الاول/1734012520089.jpg",
            "/المعرض الاول/1734012520104.jpg",
            "/المعرض الاول/1734012520114.jpg",
            "/المعرض الاول/1734012520135.jpg",
            "/المعرض الاول/1734012520149.jpg",
            "/المعرض الاول/1734012520178.jpg",
            "/المعرض الاول/1734012520206.jpg",
            "/المعرض الاول/1734012520214.jpg",
            "/المعرض الاول/1734012520225.jpg",
            "/المعرض الاول/1734012520233.jpg",
            "/المعرض الاول/1734012520242.jpg",
            "/المعرض الاول/1734012520254.jpg",
            "/المعرض الاول/1734012520269.jpg",
            "/المعرض الاول/1734012520301.jpg",
            "/المعرض الاول/1734012520341.jpg",
            "/المعرض الاول/1734012520365.jpg",
            "/المعرض الاول/1734012520388.jpg",
            "/المعرض الاول/1734012520437.jpg",
            "/المعرض الاول/1734012520446.jpg",
            "/المعرض الاول/1734012520456.jpg",
            "/المعرض الاول/1734012520466.jpg",
            "/المعرض الاول/1734012520476.jpg",
            "/المعرض الاول/1734012520488.jpg",
            "/المعرض الاول/1734012520509.jpg",
            "/المعرض الاول/1734012520524.jpg",
            "/المعرض الاول/1734012520542.jpg",
            "/المعرض الاول/1734012520567.jpg",
            "/المعرض الاول/1734012520578.jpg",
            "/المعرض الاول/1734012520589.jpg",
            "/المعرض الاول/1734012520607.jpg",
            "/المعرض الاول/IMG_٢٠٢٤١٢١٧_١٧٣٤١٠٥٢.jpeg",
            "/المعرض الاول/IMG_٢٠٢٤١٢١٧_١٧٣٤٣٧٣٥.jpeg",
            "/المعرض الاول/IMG_٢٠٢٤١٢١٧_١٧٣٤٤٢١٦.jpeg",
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
        eventTitle.innerHTML = `<h2> Borg El Arab Technical University Hosts the 2nd Information Technology Exhibition </h2><br><br>`;
        eventDescription.innerHTML = `
        <p>Borg El Arab, Alexandria – July 3, 2024: The second Information Technology Exhibition at Borg El Arab Technical University took place under the patronage of Dr. Ayman Ashour, Minister of Higher Education and Scientific Research, with key figures in attendance, including:</p>
        
        <ul>
            <li>Prof. Dr. Ahmed El-Sabbagh, Advisor to the Minister</li>
            <li>Prof. Dr. Mohamed Morsi El-Gohary, President of the University</li>
            <li>Industry leaders</li>
        </ul>
        
        <p>The exhibition featured 52 innovative student projects in fields such as AI, Big Data, IoT, and Cybersecurity. Prof. Dr. El-Gohary highlighted the exhibition’s role in advancing technology education and promoting innovation. He also announced the launch of the "Techno-Child University" initiative to teach new technologies to youth in Borg El Arab and Alexandria.</p>
        
        <p>The event also hosted discussions on the future of IT, with contributions from industry experts. The IoT Lab, built through the combined efforts of faculty and students, was officially inaugurated.</p>
        
        <p>Notable attendees included:</p>
        <ul>
            <li>Prof. Dr. Rania El-Sharkawy</li>
            <li>Prof. Dr. Mona Abdel Latif</li>
            <li>Mr. Hani El-Menshawy</li>
            <li>Mrs. Omima El-Sheikh</li>
        </ul>
        
        <p>Media Center & Official Spokesperson</p>
        <p>Borg El Arab Technical University</p>
        `;
    
        const imageSources = [
        "/المعرض الثاني/FB_IMG_1734448937695.jpg",
        "/المعرض الثاني/FB_IMG_1734448939940.jpg",
        "/المعرض الثاني/FB_IMG_1734448941698.jpg",
        "/المعرض الثاني/FB_IMG_1734448945058.jpg",
        "/المعرض الثاني/FB_IMG_1734448946531.jpg",
        "/المعرض الثاني/FB_IMG_1734448948358.jpg",
        "/المعرض الثاني/FB_IMG_1734448953207.jpg",
        "/المعرض الثاني/FB_IMG_1734448956881.jpg",
        "/المعرض الثاني/FB_IMG_1734448961866.jpg",
        "/المعرض الثاني/FB_IMG_1734448965607.jpg",
        "/المعرض الثاني/FB_IMG_1734448968848.jpg",
        "/المعرض الثاني/FB_IMG_1734448972063.jpg",
        "/المعرض الثاني/FB_IMG_1734448975730.jpg",
        "/المعرض الثاني/FB_IMG_1734448987470.jpg",
        "/المعرض الثاني/FB_IMG_1734448990618.jpg",
        "/المعرض الثاني/FB_IMG_1734448995907.jpg",
        "/المعرض الثاني/FB_IMG_1734449003794.jpg",
        "/المعرض الثاني/FB_IMG_1734449010739.jpg",
        "/المعرض الثاني/FB_IMG_1734449012624.jpg",
        "/المعرض الثاني/FB_IMG_1734449014656.jpg",
        "/المعرض الثاني/FB_IMG_1734449017099.jpg",
        "/المعرض الثاني/FB_IMG_1734449024574.jpg",
        "/المعرض الثاني/FB_IMG_1734449028420.jpg",
        "/المعرض الثاني/FB_IMG_1734449039883.jpg",
        "/المعرض الثاني/FB_IMG_1734449044147.jpg",
        "/المعرض الثاني/FB_IMG_1734449045773.jpg",
        "/المعرض الثاني/FB_IMG_1734449047165.jpg",
        "/المعرض الثاني/FB_IMG_1734449049125.jpg",
        "/المعرض الثاني/FB_IMG_1734449050657.jpg",
        "/المعرض الثاني/FB_IMG_1734449052566.jpg",
        "/المعرض الثاني/FB_IMG_1734449054531.jpg",
        "/المعرض الثاني/FB_IMG_1734449062313.jpg",
        "/المعرض الثاني/FB_IMG_1734449063725.jpg",
        "/المعرض الثاني/FB_IMG_1734449065211.jpg",
        "/المعرض الثاني/FB_IMG_1734449069706.jpg",
        "/المعرض الثاني/FB_IMG_1734449072702.jpg",
        "/المعرض الثاني/FB_IMG_1734449081350.jpg",
        "/المعرض الثاني/FB_IMG_1734449099498.jpg",
        "/المعرض الثاني/FB_IMG_1734449104168.jpg",
        "/المعرض الثاني/FB_IMG_1734449110341.jpg",
        "/المعرض الثاني/FB_IMG_1734449114482.jpg",
        "/المعرض الثاني/FB_IMG_1734449116608.jpg",
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

    // تعديل الـ Event 3 ليشمل الفيديوهات فقط
    else if (eventName === 'Event 3') {
        eventTitle.innerHTML = `<h2> President Abdel Fattah El-Sisi visited Borg El Arab Technological University </h2><br><br>`;
        eventDescription.innerHTML = `
        <p>President Abdel Fattah El-Sisi visited Borg El Arab Technological University, one of seven newly established technological universities that began operations in the 2022/2023 academic year.</p>
        
        <p>The university comprises two main faculties:</p>
    
        <h3>1. Faculty of Industrial and Energy Technology</h3>
        <p>Offering programs in:</p>
        <ul>
            <li>Information Technology</li>
            <li>Railway Technology</li>
            <li>Agricultural Tractors and Equipment Technology</li>
            <li>Textile Technology</li>
            <li>Food Industries Technology</li>
        </ul>
    
        <h3>2. Faculty of Health Sciences Technology</h3>
        <p>Including programs in:</p>
        <ul>
            <li>Nursing</li>
            <li>Pharmacy</li>
            <li>Health Information Management</li>
        </ul>
    
        <p>During the inspection tour, President El-Sisi emphasized the importance of advancing technological education as a cornerstone of Egypt’s Vision 2030, aimed at achieving sustainable development and preparing highly skilled graduates to meet local and international labor market demands.</p>
    
        <p>The President reviewed the university's state-of-the-art facilities, including advanced laboratories and workshops, designed to provide an exceptional educational and research experience.</p>
    
        <p>Minister of Higher Education, Dr. Ayman Ashour, praised the university’s role in collaborating with educational and industrial institutions to ensure students receive practical training, enhancing their skills to meet market needs.</p>
    
        <p>Dr. Mohamed Morsi El-Gohary, President of Borg El Arab Technological University, highlighted the signing of multiple cooperation protocols with prominent industrial and academic institutions. He also noted the university's efforts in organizing workshops, seminars, and field visits to equip students with the practical and technical skills necessary for the contemporary and future job markets.</p>
    
        <p>It is worth noting that the university was established under Law No. 72 of 2019 governing technological universities. The campus spans 10 acres and was constructed at a cost of approximately 540 million Egyptian pounds.</p>
        `;

        const mediaSources = [
            { type: 'video', src: "/السيد الرئيس عبد الفتاح السيسي/InShot_٢٠٢٤١٢١٧_١٨٤٠٠٨٧٩٦.mp4" },
            { type: 'video', src: "/السيد الرئيس عبد الفتاح السيسي/InShot_٢٠٢٤١٢١٧_١٨٢٨٥١٠٤٢.mp4" },
            { type: 'video', src: "/السيد الرئيس عبد الفتاح السيسي/InShot_٢٠٢٤١٢١٧_١٨٢٢٤١٧٥٠.mp4" }
        ];

        mediaSources.forEach((media, index) => {
            let element;
            if (media.type === 'video') {
                element = document.createElement('video');
                element.src = media.src;
                element.controls = true;
                element.style.width = '100%';
                element.style.borderRadius = '10px';
            }
            element.onclick = () => openModal(index);
            imagesContainer.appendChild(element);
            modalImages.push(media);
        });
    }

    detailsPage.style.display = 'grid';
}


