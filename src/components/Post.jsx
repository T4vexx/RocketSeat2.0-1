import style from "./Post.module.css"

export function Post() {
    return (
        <article className={style.post}>
            <header>
                <div className={style.author}>
                    <img className={style.avatar} src="http://github.com/T4vexx.png/" />
                    <div className={style.authorInfo}>
                        <strong>Diego Fernandes</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title="9 de Abril às 18:35" dateTime="2023-04-09 18:35:30">Publicado a 1h</time>
            </header>

            <div className={style.content}>
                <p>Fala galeraa ✍️</p>
                <p>asasds aksd m asdi masmd km kamskak asm am kasdk kaa mamd kam kamsak asdasdasdkas askka ka kdm</p>
                <p><a href="#">algumlink.com/link</a></p>
                <p>
                    <a href="#">#naoseioquela</a>{' '}
                    <a href="#">#nlw</a>{' '}
                    <a href="#">#seinao</a>
                </p>
            </div>
        </article>
    );
}