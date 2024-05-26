import { format, formatDistanceToNow } from 'date-fns'
import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from './avatar'
import { useState } from 'react'

import { ptBR } from 'date-fns/locale/pt-BR'
import styles from './comment.module.css'

interface CommentProps {
    content: string
    onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {

    const [likeCount, setLikeCount] = useState(0)
    const dateNow = new Date();
    const publishedDateFormatted = format(dateNow, "d 'de' LLLL 'às' HH:mm'h'", { locale: ptBR });
    const publishedDateRelativeToNow = formatDistanceToNow(dateNow, { addSuffix: true, locale: ptBR });

    function handleDeleteComment() {
        onDeleteComment(content)
    }

    function handleLikeComment() {
        //setLikeCount(likeCount + 1)
        setLikeCount((state) => state + 1)
    }

    return (
        <div className={styles.comment}>

            <Avatar hasBorder={false} src="https://github.com/rafaeldafranca.png" alt="" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Rafael França</strong>
                            <time
                                title={publishedDateFormatted}
                                dateTime={dateNow.toISOString()}>
                                {publishedDateRelativeToNow}
                            </time>
                        </div>

                        <button onClick={handleDeleteComment} title='Deletar Comentário'>
                            <Trash size={24} />
                        </button>

                    </header>

                    <p>{content}</p>
                </div>


                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}