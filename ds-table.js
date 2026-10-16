import { tableTheme } from 'https://cdn.jsdelivr.net/gh/ahaslides-product/ahaslides-design@v0.223.0/lib/table-theme.js';

const { React, ReactDOM, antd } = window;
const { ConfigProvider, Table } = antd;
const { createRoot } = ReactDOM;
const h = React.createElement;

function Cell({ value }) {
  if (value instanceof Node) {
    return h(value.localName === 'span' ? 'span' : 'div', { ref: (host) => { if (host && !host.firstChild) host.append(value.cloneNode(true)); } });
  }
  if (value && typeof value === 'object' && 'html' in value) {
    return h('span', { dangerouslySetInnerHTML: { __html: value.html } });
  }
  return h('span', null, value);
}

export function mountTable(host, { columns, rows, scroll, caption }) {
  const root = createRoot(host);
  const antdColumns = columns.map((column) => ({
    key: column.key,
    dataIndex: column.key,
    title: typeof column.title === 'string' ? column.title : h(Cell, { value: column.title }),
    fixed: column.fixed,
    width: column.width,
    render: (value) => h(Cell, { value }),
  }));
  const render = (dataSource) => root.render(
    h(ConfigProvider, { theme: tableTheme },
      h(Table, { rowKey: 'rowKey', columns: antdColumns, dataSource, pagination: false, scroll, 'aria-label': caption })));
  const withKeys = (list) => list.map((row, index) => ({ rowKey: String(index), ...row }));
  render(withKeys(rows));
  return { setRows: (list) => render(withKeys(list)) };
}
