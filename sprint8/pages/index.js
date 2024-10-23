import styles from '@/styles/Home.module.css';
import Header from '@/components/header.js';
import Container from '@/components/container.js';
import mainPage from '@/components/mainPage/mainPage';

export default function Home() {
  return (
    <>
      <Header />
      <Container>
        <mainPage />
      </Container>
    </>
  );
}
