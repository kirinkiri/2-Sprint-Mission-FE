import styles from '@/components/mainPage/mainPage.module.css';
import { Link } from 'next/link';

export default function mainPage() {
  return (
    <>
      <header>
        <title>판다마켓</title>
      </header>
      <body>
        <header>
          <div className={styles.nav}>
            <Link to='/'>
              <img src='img\Property_1=sm.png' className={styles.logo} />
            </Link>
            <a class='login' href='/login'>
              로그인
            </a>
          </div>
        </header>
        <div className={styles.mainBanner}>
          <div className={styles.banner - content}>
            <div> 일상의 모든 물건을 거래해 보세요 </div>
            <Link to='/items' className={styles.viewMore}>
              구경하러 가기
            </Link>
            <img className={styles.bannerImg} src='img\Img_home_top.png' />
          </div>
        </div>
        <div className={styles.mainPage}>
          <div className={styles.article}>
            <div className={styles.quickViewleft}>
              <img className={styles.clickImg} src='img\Img_home_01.png' />
              <div className={styles.clickArticle}>
                <h3>Hot item</h3>
                <h1>인기 상품을 </h1>
                <h1> 확인해 보세요</h1>
                <h2>가장 HOT한 중고거래 물품을 </h2>
                <h2> 판다 마켓에서 확인해 보세요</h2>
              </div>
            </div>
          </div>
          <div className={styles.article}>
            <div className={styles.quickViewright}>
              <div className={styles.clickArticle2}>
                <h3>Search</h3>
                <h1>구매를 원하는</h1>
                <h1> 상품을 검색하세요</h1>
                <h2>구매하고 싶은 물품은 검색해서 </h2>
                <h2> 쉽게 찾아보세요</h2>
              </div>
              <img className={styles.clickImg} src='img\Img_home_02.png' />
            </div>
          </div>
          <div className={styles.article}>
            <div className={styles.quickViewleft}>
              <img className={styles.clickImg} src='img\Img_home_03.png' />
              <div className={styles.clickArticle3}>
                <h3>Register</h3>
                <h1>판매를 원하는 </h1>
                <h1> 상품을 등록하세요</h1>
                <h2>어떤 물건이든 판매하고 싶은 상품을 </h2>
                <h2> 쉽게 등록하세요</h2>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.mainBanner}>
          <div className={styles.bannerContentEnd}>
            <div>믿을 수 있는</div>
            <div> 판다마켓 중고 거래 </div>

            <img className={styles.bannerImg} src='img\Img_home_bottom.png' />
          </div>
        </div>
        <footer>
          <div className={styles.footer - card}>
            <div className={styles.copy - right}>@codeit-2024</div>
            <p className={styles.privacy - faq}>
              <Link to='/privacy'>Privacy Policy</Link>
              <Link to='/faq'>FAQ</Link>
            </p>
            <div className={styles.sns}>
              <Link to='https://www.facebook.com/?locale=ko_KR'>
                <img src='img\ic_facebook.png' />
              </Link>
              <Link to='https://x.com/home?lang=ko'>
                <img src='img\ic_twitter.png' />
              </Link>
              <Link to='https://www.youtube.com/'>
                <img src='img\ic_youtube.png' />
              </Link>
              <Link to='https://www.instagram.com/'>
                <img src='img\ic_instagram.png' />
              </Link>
            </div>
          </div>
        </footer>
      </body>
    </>
  );
}
