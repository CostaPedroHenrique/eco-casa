import styles from './styles.module.scss'
import Image from 'next/image'
import trashImg from  '../../assets/images/trash.png'
import trashExampleImg from  '../../assets/images/trash-example.png'

export default function About(){
    return (
        <div className={styles.main}>
            <div className={styles.content}>
                <Image className={styles.contentImg} src={trashImg}/>
                <div className={styles.contentText}>
                    <h3 style={{fontWeight: 700, fontSize: 18}}>Sobre o que é o desafio?</h3>
                    <p>O plástico é o principal poluente dos oceanos e em alguns locais já se tornou até parte da composição do oceano.</p>
                    <p>Grande parte desse plástico são garrafas pets não descartadas corretamente. Apesar de ser 100% reciclável, ainda há muita gente que descarte as garrafas PET no meio ambiente em vez de as encaminhar corretamente para a coleta seletiva.</p>
                    <p>Isso acaba gerando diversos problemas, tanto nos oceanos quanto na terra. Entre esses problemas os principais são:</p>
                    <p>Redução da biodiversidade nos oceanos, aumento da quantidade de lixo nos aterros, aumento da quantidade de algas no oceano e a morte de aves e mamíferos marinhos.</p>
                    <p>Visando reduzir uma parcela de todo esse plástico que acaba nos oceanos, ruas e aterros desenvolvemos um sistema que visa incentivar o descarte seletivo, inicialmente de garrafas pets. </p>
                </div>
            </div>
            <div className={styles.content}>
                <div className={styles.contentText}>
                    <h3 style={{fontWeight: 700, fontSize: 18}}>Nosso Projeto</h3>
                    <p>A nossa lixeira Automatizada, cuja função é armazenar e quantificar resíduos  de Tereftalato de Polietileno – PET, através de componentes eletrônicos e controle por Arduíno. Para utilizar essa lixeira, basta realizar previamente um cadastro com seus dados e definir um login para ter acesso. Além de ser uma lixeira que coleta seus resíduos e faz a destinação correta para reciclagem, ela também converte seu lixo em pontos após cada descarte, possibilitando o acesso a benefícios como por exemplo o IPTU verde ou até mesmo descontos em empresas parceiras desse projeto.</p>
                </div>
                <Image className={styles.contentImg} src={trashExampleImg}/>
            </div>
        </div>
    )
}