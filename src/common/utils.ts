import { HttpStatus } from '@nestjs/common';

export const ERRORS = {
  REQUEST_INVALID: {
    statusCode: HttpStatus.BAD_REQUEST,
    errorCode: 10000,
    message: '잘못된 요청입니다.',
  },
};
