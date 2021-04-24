import json from '../data/data.json';
import Table from './engine/table';
// import Sorting from './engine/sorting';
import './engine/template';

const test = new Table(json);
test.renderTable();
test.addListeners();
