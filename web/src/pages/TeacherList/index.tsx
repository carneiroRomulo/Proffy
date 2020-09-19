import React from 'react';

import './styles.css';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';

export default function TeacherList() {
  return(
    <div id="page-teacher-list" className="container">
      <PageHeader title="Esses são os Proffys disponíveis.">
        <form id="search-teachers">
        <Select
            name="subject"
            label="Matéria"
            options={[
              { value: 'Artes', label: 'Artes' },
              { value: 'Física', label: 'Física' },
              { value: 'Biologia', label: 'Biologia' },
              { value: 'Química', label: 'Química' },
              { value: 'Geografia', label: 'Geografia' },
              { value: 'História', label: 'História' },
              { value: 'Filosoia', label: 'Filosoia' },
              { value: 'Sociologia', label: 'Sociologia' },
              { value: 'Português', label: 'Português' },
              { value: 'Matemática', label: 'Matemática' },
              { value: 'Inglês', label: 'Inglês' },
            ]}
          />
          <Select
            name="week-day"
            label="Dia da Semana"
            options={[
              { value: '0', label: 'Segunda-Feira' },
              { value: '1', label: 'Terça-Feira' },
              { value: '2', label: 'Quarta-Feira' },
              { value: '3', label: 'Quinta-Feira' },
              { value: '4', label: 'Sexta-Feira' },
            ]}
          />
          <Input type="time" name="time" label="Hora"/>

        </form>
      </PageHeader>

      <main>
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />

      </main>
    </div>
  )
}

