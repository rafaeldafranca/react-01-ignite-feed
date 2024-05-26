import { format, formatDistanceToNow } from 'date-fns' //npm i date-fns 
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';

import { Comment } from './comment';
import { Avatar } from './avatar';

import { ptBR } from 'date-fns/locale/pt-BR'
import styles from './post.module.css';

interface Author {
    name: string;
    role: string;
    avatarUrl: string;
}

interface Content {
    type: 'paragraph' | 'link';
    content: string

}

interface PostType {
    id: number;
    author: Author;
    publishedAt: Date;
    content: Content[];
}

interface PostProps {
    post: PostType;
}

export function Post({ post }: PostProps) {

    const [newCommentText, setNewCommentText] = useState('');
    const [comments, setComments] = useState([
        "Post muito bacana, hein?"
    ])

    const publishedDateFormatted = format(post.publishedAt, "d 'de' LLLL 'às' HH:mm'h'", { locale: ptBR });
    const publishedDateRelativeToNow = formatDistanceToNow(post.publishedAt, { addSuffix: true, locale: ptBR });
    const isNewCommentEmpty = newCommentText.length === 0;

    function handleCreateNewComment(event: FormEvent) {
        event.preventDefault()
        setComments([...comments, newCommentText]);
        setNewCommentText('')
    }

    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('')
        setNewCommentText(event.target.value)
    }


    function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('Esse campo deve ser preenchido!')
    }

    function deleteComment(commentToDelete: string) {
        const commentsWithoutDeletedOne = comments.filter(comment => {
            return comment !== commentToDelete
        })

        setComments(commentsWithoutDeletedOne);
    }
    return (
        <article className={styles.post}>

            <header>

                <div className={styles.author}>
                    <Avatar src={post.author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{post.author.name}</strong>
                        <span>{post.author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormatted} dateTime={post.publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
            </header>

            <div className={styles.content}>
                {post.content.map(line => {
                    if (line.type === 'paragraph') {
                        return (<p key={line.content}>{line.content}</p>);
                    }
                    else if (line.type === 'link') {
                        return (<p key={line.content}><a href="#">{line.content}</a></p>);
                    }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>

                <strong>Deixe seu feedback</strong>
                <textarea
                    name="comment"
                    placeholder='Deixe um comentario'
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                    onInvalid={handleNewCommentInvalid}
                    required
                />

                <footer>
                    <button
                        disabled={isNewCommentEmpty}
                        type='submit'>
                        Publicar
                    </button>
                </footer>
            </form>
            <div className={styles.commentList}>
                {comments.map(comment => {
                    return (
                        <Comment key={comment}
                            content={comment}
                            onDeleteComment={deleteComment}
                        />
                    )
                })
                }
            </div>

        </article>
    )
}