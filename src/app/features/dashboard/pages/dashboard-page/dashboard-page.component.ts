import { Component } from '@angular/core';
import { KnowledgeLibraryService } from '../../services/knowledge-library.service';
import {
  KnowledgeEntry,
  MedicationGuide
} from '../../../../shared/models/knowledge-entry.model';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent {
  searchTerm = '';
  selectedCategory = 'Todos';
  selectedEntry: KnowledgeEntry | null = null;
  selectedMedication: MedicationGuide | null = null;

  readonly entries: KnowledgeEntry[];
  readonly categories: string[];
  readonly valueIdeas = [
    'Favoritos para marcar as orientacoes mais usadas no dia a dia do balcao.',
    'Historico de revisoes para registrar quando Itamar atualizou uma conduta ou observacao.',
    'Campo de observacao por topico para guardar variantes por perfil de paciente.',
    'Filtro por sintoma principal para acelerar a consulta no atendimento.',
    'Etiquetas de atencao para contraindicacoes, gestantes, idosos e criancas.'
  ];

  constructor(private readonly knowledgeLibraryService: KnowledgeLibraryService) {
    this.entries = this.knowledgeLibraryService.getEntries();
    this.categories = ['Todos', ...new Set(this.entries.map((entry) => entry.category))];
  }

  get filteredEntries(): KnowledgeEntry[] {
    const normalizedSearch = this.searchTerm.trim().toLowerCase();

    return this.entries.filter((entry) => {
      const matchesCategory =
        this.selectedCategory === 'Todos' || entry.category === this.selectedCategory;

      const matchesSearch =
        normalizedSearch.length === 0 ||
        entry.topic.toLowerCase().includes(normalizedSearch) ||
        entry.category.toLowerCase().includes(normalizedSearch) ||
        entry.symptoms.some((symptom) => symptom.toLowerCase().includes(normalizedSearch)) ||
        entry.medications.some((medication) =>
          medication.name.toLowerCase().includes(normalizedSearch)
        );

      return matchesCategory && matchesSearch;
    });
  }

  selectCategory(category: string): void {
    this.selectedCategory = category;
  }

  openMedicationDetails(entry: KnowledgeEntry, medication: MedicationGuide): void {
    this.selectedEntry = entry;
    this.selectedMedication = medication;
  }

  closeEntryDetails(): void {
    this.selectedEntry = null;
    this.selectedMedication = null;
  }
}
