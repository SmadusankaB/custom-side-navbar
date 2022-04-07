export const childRoutes = [
  {
    path: 'form',
    loadChildren: () =>
      import('./form/form.module').then(m => m.FormModule),
    data: { icon: 'insert_drive_file', text: 'Form' }
  },
  {
    path: 'chart',
    loadChildren: () =>
      import('./form/form.module').then(m => m.FormModule),
    data: { icon: 'bar_chart', text: 'Bar' }
  },
  {
    path: 'chart',
    loadChildren: () =>
      import('./form/form.module').then(m => m.FormModule),
    data: { icon: 'border_color', text: 'Border' }
  },
  {
    path: 'chart',
    loadChildren: () =>
      import('./form/form.module').then(m => m.FormModule),
    data: { icon: 'bubble_chart', text: 'Bubble' }
  },
  {
    path: 'chart',
    loadChildren: () =>
      import('./form/form.module').then(m => m.FormModule),
    data: { icon: 'format_bold', text: 'Bold' }
  },
  {
    path: 'chart',
    loadChildren: () =>
      import('./form/form.module').then(m => m.FormModule),
    data: { icon: 'format_color_text', text: 'Color' }
  },
  {
    path: 'chart',
    loadChildren: () =>
      import('./form/form.module').then(m => m.FormModule),
    data: { icon: 'format_paint', text: 'Format' }
  },
  {
    path: 'chart',
    loadChildren: () =>
      import('./form/form.module').then(m => m.FormModule),
    data: { icon: 'publish', text: 'Publish' }
  },
  {
    path: 'chart',
    loadChildren: () =>
      import('./form/form.module').then(m => m.FormModule),
    data: { icon: 'title', text: 'Title' }
  },
];
