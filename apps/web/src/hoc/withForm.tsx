import { Form } from 'antd';
import type { FormInstance } from 'antd';
import type { ComponentType } from 'react';

export interface AntFormProps<TValues = unknown> {
  form: FormInstance<TValues>;
}

export function withForm<TProps extends AntFormProps>(
  WrappedComponent: ComponentType<TProps>,
) {
  return function WithForm(props: Omit<TProps, keyof AntFormProps>) {
    const [form] = Form.useForm();

    return <WrappedComponent {...(props as TProps)} form={form} />;
  };
}
