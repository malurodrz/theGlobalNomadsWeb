import { Component } from '@angular/core';

@Component({
  selector: 'app-impress',
  standalone: false,

  templateUrl: './impress.component.html',
  styleUrls: ['./impress.component.scss', '../../component/header/header.component.scss'],
})
export class ImpressComponent {
  imprensses = [
    { src: 'assets/img/hotel.png', alt: 'Image 1', title: 'CNN Viagem e Gastronomia - Fevereiro 2022', site: 'Wilderness Ruanda', link: 'https://www.youtube.com/watch?v=RQ1FJEG1Kpg' },
    { src: 'assets/img/hotel.png', alt: 'Image 3', title: 'CNN Viagem e Gastronomia - Julho 2022', site: 'Quark Expeditions - Ártico', link: 'https://www.youtube.com/watch?v=_K9NploaJ7g' },
    { src: 'assets/img/hotel.png', alt: 'Image 5', title: 'Unquiet - Setembro 2023', site: 'Travessia Explora Atacama-Uyuni', link: 'https://drive.google.com/file/d/1SweAMuOJYQEVtQQYUhvogAQ7r8lvlJkK/view?usp=sharing' },
    { src: 'assets/img/hotel.png', alt: 'Image 6', title: 'Forbes - Novembro 2023', site: 'Wilderness Botsuana', link: 'https://drive.google.com/file/d/1PmWJSpXCjJVm8aC-8cidv6Z44jafkr07/view?usp=sharing' },
    { src: 'assets/img/hotel.png', alt: 'Image 7', title: 'Harper’s Bazaar - Novembro 2023', site: 'Six Senses Douro Valley', link: 'https://drive.google.com/file/d/18GOAEBGxEVbw5s3od-E2NTUw-yHVsN1C/view?usp=sharing' },
    { src: 'assets/img/hotel.png', alt: 'Image 8', title: 'Unquiet - Novembro 2023', site: 'Explora Parque Nacional Patagonia', link: 'https://drive.google.com/file/d/14MERowwmWJ3jb_o9RKhFiEbGrK_fgdA-/view?usp=sharing' },
    { src: 'assets/img/hotel.png', alt: 'Image 9', title: 'Forbes - Novembro 2023', site: 'Six Senses Douro Valley', link: 'https://drive.google.com/file/d/1Gk5F8-Jkq67whPMec8gKAFxWZ-Urjj81/view?usp=sharing' },
    { src: 'assets/img/hotel.png', alt: 'Image 10', title: 'Top Destinos - Dezembro 2023', site: 'Six Senses Kanuhura, Maldivas', link: 'https://drive.google.com/file/d/1cdVo9TEPEATloZGze3Ob3Be9zJRqq0L2/view?usp=sharing' },
    { src: 'assets/img/hotel.png', alt: 'Image 11', title: 'Unquiet Magazine - Setembro 2024', site: 'Entrevista - CEO Wilderness', link: 'https://drive.google.com/file/d/1tsmOYmQ1HtK97Eh5bEVs8krLO5nUjuxf/view?usp=sharing' },
    { src: 'assets/img/hotel.png', alt: 'Image 12', title: 'Folha de São Paulo - Outubro 2024', site: 'Quark Expeditions - Antártica', link: 'https://drive.google.com/file/d/13GXRIV3TL9ZGTeOLiQsU_M0-Pt7q79N-/view?usp=sharing' },
    { src: 'assets/img/hotel.png', alt: 'Image 13', title: 'Folha de São Paulo - Outubro 2024', site: 'Quark Expeditions - Antártica', link: 'https://drive.google.com/file/d/13Kn_Ffjz8IG81GxVtgin7kZMmvHTyJmf/view?usp=sharing' },
    { src: 'assets/img/hotel.png', alt: 'Image 14', title: 'Cidade Jardim Magazine - Novembro 2024', site: 'Wilderness Botswana', link: 'https://drive.google.com/file/d/1IPyJK5otYX0PJfy-mWoZ4zkMED9O12bX/view?usp=sharing' },
    { src: 'assets/img/hotel.png', alt: 'Image 15', title: 'Top Destinos - Novembro 2024', site: 'SHA Mexico', link: 'https://drive.google.com/file/d/1ceidFCDwJvG5wE2THYXFPnt6RNPAGLFo/view?usp=sharing' }
  ];

  influencers = [
    { src: 'assets/img/hotel.png', alt: 'Image 1', name: 'Camilla Guebur - Novembro 2022', site: 'Wilderness Namíbia', link: 'https://www.instagram.com/p/ClbM-UkP04B/' },
    { src: 'assets/img/hotel.png', alt: 'Image 2', name: 'Fabio Porchat - Fevereiro 2023', site: 'Wilderness Zimbabue', link: 'https://www.instagram.com/p/Co76wx-thXg/?img_index=1' },
    { src: 'assets/img/hotel.png', alt: 'Image 3', name: 'Bruno Gagliasso - Agosto 2023', site: 'Vestige Son Vell', link: 'https://www.instagram.com/p/Cv2tFaDoblJ/?img_index=4' },
    { src: 'assets/img/hotel.png', alt: 'Image 4', name: 'Luciana Tranchesi - Fevereiro 2024', site: 'Wilderness Botsuana', link: 'https://www.instagram.com/reel/C3dvQ6CvL2Q/?igsh=MXd5aHNtcDNtZ3gzOA==' },
    { src: 'assets/img/hotel.png', alt: 'Image 5', name: 'Marcella Tranchesi - Fevereiro 2024', site: 'Six Senses Kanuhura', link: 'https://www.instagram.com/reel/C3phDlCulkG/?igsh=bGgyNzltdGFvdHk2' },
    { src: 'assets/img/hotel.png', alt: 'Image 6', name: 'Marcella Tranchesi - Fevereiro 2024', site: 'Six Senses Zighy Bay', link: 'https://www.instagram.com/p/C3k0Ppwrbu4/?igsh=MXhkdzkzN25hc212Zg==' },
    { src: 'assets/img/hotel.png', alt: 'Image 7', name: 'Camilla Guebur - Novembro 2024', site: 'Wilderness Tanzania', link: 'https://www.instagram.com/p/DCXafzfs6Ns/' }
  ];


  openLink(url: string) {
    window.open(url, '_blank');
  }
}
