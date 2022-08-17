import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
  RequestTimeoutException,
} from '@nestjs/common';
import {
  catchError,
  Observable,
  throwError,
  timeout,
  TimeoutError,
} from 'rxjs';

@Injectable()
export class TimeoutInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      timeout(3000),
      catchError((err) => {
        if (err instanceof TimeoutError) {
          // return throwError(new RequestTimeoutException()); 被弃用改为 return throwError(() => new RequestTimeoutException());
          return throwError(() => new RequestTimeoutException());
        }
        return throwError(err);
      }),
    ); // 3秒后取消
  }
}
