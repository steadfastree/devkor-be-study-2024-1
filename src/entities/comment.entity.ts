import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';
import { User } from './user.entity';
import { Post } from './post.entity';
import { BasicDate } from './basic-date.entity';
// import { Reply } from './reply.entity';

@Entity('comment')
export class Comment extends BasicDate {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  content: string;

  // @OneToMany((type) => Reply, (reply) => reply.comment)
  // replies: Reply[];

  @OneToMany((type) => Comment, (comment) => comment.parentComment)
  childrenComments: Comment[];

  @ManyToOne((type) => Comment, (comment) => comment.childrenComments, {
    nullable: true,
  })
  parentComment: Comment;

  @RelationId((comment: Comment) => comment.parentComment)
  @Column({ nullable: true })
  parentCommentId: number;

  @ManyToOne((type) => Post, (post) => post.comments)
  post: Post;

  @RelationId((comment: Comment) => comment.post)
  @Column()
  postId: number;

  @ManyToOne((type) => User, (user) => user.comments)
  user: User;

  @RelationId((comment: Comment) => comment.user)
  @Column()
  userUuid: string;
}
