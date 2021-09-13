import { map } from 'rxjs/operators';
import { OperatorFunction } from 'rxjs';

const _mapToClass = <T>(data: any, _class: new (data: any) => T): T =>
  new _class(data);

const _mapToClasses = <T>(data: any[], _class: new (data?: any) => T): T[] =>
  data.map((d) => new _class(d));

export const mapToClass = <T>(
  _class: new (data?: any) => T
): OperatorFunction<any, T> => map((value) => _mapToClass(value, _class));

export const mapToClasses = <T>(
  _class: new (data?: any) => T
): OperatorFunction<any, T[]> => map((value) => _mapToClasses(value, _class));
