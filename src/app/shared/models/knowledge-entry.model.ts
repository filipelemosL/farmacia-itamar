export interface KnowledgeEntry {
  id: string;
  topic: string;
  category: string;
  symptoms: string[];
  medications: MedicationGuide[];
  notes: string[];
  expertInsight: string;
  warning: string;
}

export interface MedicationGuide {
  name: string;
  dosage: string;
  frequency: string;
  presentation: string;
}
