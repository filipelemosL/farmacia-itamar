import { KnowledgeEntry } from '../../../shared/models/knowledge-entry.model';

export const ITAMAR_KNOWLEDGE_DATA: KnowledgeEntry[] = [
  {
    id: 'dor-de-cabeca',
    topic: 'Dor de cabeca',
    category: 'Dor e febre',
    symptoms: ['Dor tensional', 'Mal-estar', 'Sensibilidade leve a luz'],
    medications: [
      {
        name: 'Paracetamol',
        dosage: '500 mg a 750 mg',
        frequency: 'A cada 6 ou 8 horas',
        presentation: 'Comprimido ou gotas'
      },
      {
        name: 'Dipirona',
        dosage: '500 mg a 1 g',
        frequency: 'A cada 6 horas',
        presentation: 'Comprimido, gotas ou solucao'
      }
    ],
    notes: [
      'Orientar hidratacao e repouso quando a dor estiver associada a cansaco.',
      'Evitar automedicacao continua por varios dias sem reavaliacao.'
    ],
    expertInsight: 'Itamar costuma reforcar que dor recorrente exige investigar causa e nao apenas repetir analgesico.',
    warning: 'Encaminhar se houver dor intensa repentina, febre alta persistente, rigidez na nuca ou alteracao neurologica.'
  },
  {
    id: 'gripe-resfriado',
    topic: 'Gripe e resfriado',
    category: 'Respiratorio',
    symptoms: ['Coriza', 'Congestao nasal', 'Dor no corpo', 'Mal-estar'],
    medications: [
      {
        name: 'Paracetamol',
        dosage: '500 mg a 750 mg',
        frequency: 'A cada 6 ou 8 horas',
        presentation: 'Comprimido ou gotas'
      },
      {
        name: 'Soro fisiologico nasal',
        dosage: 'Aplicacao livre conforme necessidade',
        frequency: 'Varias vezes ao dia',
        presentation: 'Spray ou gotas'
      }
    ],
    notes: [
      'Dar preferencia a medidas de suporte: hidratacao, lavagem nasal e descanso.',
      'Atencao a combinacoes antigripais em pacientes hipertensos.'
    ],
    expertInsight: 'Na pratica do balcao, Itamar valoriza separar sintoma por sintoma para evitar excesso de medicacao combinada.',
    warning: 'Encaminhar em caso de falta de ar, chiado, piora apos melhora inicial ou febre prolongada.'
  },
  {
    id: 'garganta-inflamada',
    topic: 'Garganta inflamada',
    category: 'Respiratorio',
    symptoms: ['Dor ao engolir', 'Ardor', 'Irritacao', 'Rouquidao leve'],
    medications: [
      {
        name: 'Benzydamine spray ou pastilha',
        dosage: 'Conforme bula da apresentacao',
        frequency: 'A cada 3 ou 6 horas',
        presentation: 'Spray ou pastilha'
      },
      {
        name: 'Paracetamol',
        dosage: '500 mg a 750 mg',
        frequency: 'A cada 6 ou 8 horas',
        presentation: 'Comprimido ou gotas'
      }
    ],
    notes: [
      'Liquidos mornos e repouso vocal podem aliviar bastante.',
      'Observar presenca de placas, febre alta e dificuldade para engolir.'
    ],
    expertInsight: 'Itamar ensina que garganta muito inflamada com febre alta merece triagem cuidadosa para nao mascarar infeccao importante.',
    warning: 'Encaminhar se houver falta de ar, dificuldade importante para engolir, pus visivel ou sintomas persistentes.'
  },
  {
    id: 'diarreia',
    topic: 'Diarreia',
    category: 'Gastrointestinal',
    symptoms: ['Evacuacoes frequentes', 'Desconforto abdominal', 'Fraqueza', 'Desidratacao leve'],
    medications: [
      {
        name: 'Sais de reidratacao oral',
        dosage: 'Conforme preparo da embalagem',
        frequency: 'Apos cada episodio e ao longo do dia',
        presentation: 'Envelope para solucao oral'
      },
      {
        name: 'Probiótico',
        dosage: 'Conforme apresentacao',
        frequency: '1 a 2 vezes ao dia',
        presentation: 'Capsula, sache ou gotas'
      }
    ],
    notes: [
      'Reidratacao vem antes de qualquer outra conduta.',
      'Evitar antidiarreicos sem avaliar idade, febre e sangue nas fezes.'
    ],
    expertInsight: 'Segundo Itamar, o erro mais comum no atendimento rapido e esquecer de orientar liquidos e sinais de desidratacao.',
    warning: 'Encaminhar se houver sangue nas fezes, febre alta, sinais de desidratacao, dor intensa ou quadro em criancas pequenas.'
  },
  {
    id: 'azia-refluxo',
    topic: 'Azia e refluxo',
    category: 'Gastrointestinal',
    symptoms: ['Ardencia no estomago', 'Queimacao no peito', 'Estufamento leve'],
    medications: [
      {
        name: 'Antiácido',
        dosage: 'Conforme apresentacao',
        frequency: 'Apos refeicoes ou quando necessario',
        presentation: 'Suspensao ou mastigavel'
      },
      {
        name: 'Omeprazol',
        dosage: '20 mg',
        frequency: '1 vez ao dia',
        presentation: 'Capsula'
      }
    ],
    notes: [
      'Orientar evitar refeicoes pesadas e deitar logo apos comer.',
      'Uso continuo de omeprazol deve ser reavaliado.'
    ],
    expertInsight: 'Itamar costuma registrar historico alimentar quando a queixa de azia aparece com frequencia.',
    warning: 'Encaminhar se houver dor no peito atipica, perda de peso, vomitos persistentes ou dificuldade para engolir.'
  },
  {
    id: 'alergia-leve',
    topic: 'Alergia leve',
    category: 'Alergias',
    symptoms: ['Coceira', 'Espirros', 'Coriza', 'Vermelhidao leve'],
    medications: [
      {
        name: 'Loratadina',
        dosage: '10 mg',
        frequency: '1 vez ao dia',
        presentation: 'Comprimido ou xarope'
      },
      {
        name: 'Cetirizina',
        dosage: '10 mg',
        frequency: '1 vez ao dia',
        presentation: 'Comprimido ou gotas'
      }
    ],
    notes: [
      'Investigar gatilho provavel para orientar prevencao.',
      'Atencao a sonolencia conforme o perfil do paciente.'
    ],
    expertInsight: 'No acervo do Itamar, alergia leve e sempre acompanhada de observacao sobre exposicao ambiental e historico do paciente.',
    warning: 'Encaminhar imediatamente se houver inchaco de labios, lingua, falta de ar ou piora rapida.'
  },
  {
    id: 'tosse',
    topic: 'Tosse comum',
    category: 'Respiratorio',
    symptoms: ['Irritacao na garganta', 'Tosse seca ou produtiva leve', 'Desconforto no peito'],
    medications: [
      {
        name: 'Mel com limao ou xarope simples',
        dosage: 'Conforme apresentacao',
        frequency: '2 a 3 vezes ao dia',
        presentation: 'Caseiro ou xarope'
      },
      {
        name: 'Acetilcisteina',
        dosage: '600 mg',
        frequency: '1 vez ao dia',
        presentation: 'Envelope ou comprimido efervescente'
      }
    ],
    notes: [
      'Diferenciar tosse seca de tosse com secrecao ajuda a escolher melhor o suporte.',
      'Nao indicar mel para criancas menores de 1 ano.'
    ],
    expertInsight: 'Itamar prefere avaliar o tipo de secrecao e o tempo de evolucao antes de sugerir mucolitico.',
    warning: 'Encaminhar se houver falta de ar, tosse com sangue, febre persistente ou duracao prolongada.'
  },
  {
    id: 'colica-menstrual',
    topic: 'Colica menstrual',
    category: 'Saude da mulher',
    symptoms: ['Dor em baixo ventre', 'Peso lombar', 'Mal-estar'],
    medications: [
      {
        name: 'Ibuprofeno',
        dosage: '400 mg',
        frequency: 'A cada 8 horas',
        presentation: 'Comprimido'
      },
      {
        name: 'Escopolamina',
        dosage: '10 mg',
        frequency: 'A cada 8 horas',
        presentation: 'Comprimido ou gotas'
      }
    ],
    notes: [
      'Compressa morna pode complementar bem o alivio.',
      'Confirmar historico gastrico antes de anti-inflamatorio.'
    ],
    expertInsight: 'Itamar costuma registrar padrao de intensidade e periodicidade para diferenciar colica habitual de sinais fora do padrao.',
    warning: 'Encaminhar se a dor for incapacitante, fora do padrao, acompanhada de desmaio ou sangramento incomum.'
  },
  {
    id: 'congestao-nasal',
    topic: 'Congestao nasal',
    category: 'Respiratorio',
    symptoms: ['Nariz entupido', 'Dificuldade para respirar pelo nariz', 'Pressao facial leve'],
    medications: [
      {
        name: 'Soro fisiologico',
        dosage: 'Lavagem nasal conforme necessidade',
        frequency: 'Varias vezes ao dia',
        presentation: 'Spray ou ampola'
      },
      {
        name: 'Descongestionante nasal',
        dosage: 'Conforme bula',
        frequency: 'Uso curto, ate 3 a 5 dias',
        presentation: 'Spray'
      }
    ],
    notes: [
      'Lavagem nasal deve ser a primeira orientacao.',
      'Evitar uso prolongado de descongestionante para nao causar efeito rebote.'
    ],
    expertInsight: 'Para Itamar, orientar limite de dias do spray nasal e tao importante quanto indicar o produto.',
    warning: 'Encaminhar se houver dor facial forte, secrecao com cheiro forte, febre persistente ou quadro arrastado.'
  },
  {
    id: 'enjoo',
    topic: 'Enjoo e ma digestao',
    category: 'Gastrointestinal',
    symptoms: ['Nausea', 'Estomago embrulhado', 'Desconforto apos refeicao'],
    medications: [
      {
        name: 'Dimenidrinato',
        dosage: '50 mg',
        frequency: 'A cada 6 ou 8 horas',
        presentation: 'Comprimido'
      },
      {
        name: 'Soro de reidratacao ou agua fracionada',
        dosage: 'Pequenos goles',
        frequency: 'Ao longo do dia',
        presentation: 'Liquido'
      }
    ],
    notes: [
      'Avaliacao do contexto alimentar faz diferenca no atendimento.',
      'Fracionar liquidos reduz piora de nausea.'
    ],
    expertInsight: 'Itamar valoriza perguntar quando o enjoo comecou e se existe relacao com alimento, viagem ou medicacao recente.',
    warning: 'Encaminhar se houver vomitos persistentes, sinais de desidratacao, dor intensa ou suspeita de gravidez de risco.'
  },
  {
    id: 'febre-baixa',
    topic: 'Febre baixa',
    category: 'Dor e febre',
    symptoms: ['Corpo quente', 'Mal-estar', 'Calafrio leve', 'Dor no corpo'],
    medications: [
      {
        name: 'Paracetamol',
        dosage: '500 mg a 750 mg',
        frequency: 'A cada 6 ou 8 horas',
        presentation: 'Comprimido ou gotas'
      },
      {
        name: 'Dipirona',
        dosage: '500 mg a 1 g',
        frequency: 'A cada 6 horas',
        presentation: 'Comprimido, gotas ou solucao'
      }
    ],
    notes: [
      'Estimular ingestao de liquidos e repouso.',
      'Observar temperatura e tempo de evolucao do quadro.'
    ],
    expertInsight: 'Itamar costuma lembrar que febre e sinal de observacao, e nao apenas algo para baixar sem entender a causa.',
    warning: 'Encaminhar se houver febre alta persistente, confusao, rigidez na nuca, falta de ar ou prostracao importante.'
  },
  {
    id: 'dor-muscular',
    topic: 'Dor muscular',
    category: 'Dor e febre',
    symptoms: ['Dor localizada', 'Rigidez', 'Sensacao de cansaco muscular'],
    medications: [
      {
        name: 'Ibuprofeno',
        dosage: '400 mg',
        frequency: 'A cada 8 horas',
        presentation: 'Comprimido'
      },
      {
        name: 'Paracetamol',
        dosage: '500 mg a 750 mg',
        frequency: 'A cada 6 ou 8 horas',
        presentation: 'Comprimido ou gotas'
      }
    ],
    notes: [
      'Repouso relativo e compressa morna podem ajudar no alivio.',
      'Confirmar historico gastrico antes de sugerir anti-inflamatorio.'
    ],
    expertInsight: 'Na rotina do Itamar, dor muscular simples melhora melhor quando a orientacao de descanso vem junto com o medicamento.',
    warning: 'Encaminhar se houver trauma importante, inchaco acentuado, febre associada ou perda de forca.'
  },
  {
    id: 'dor-nas-costas-leve',
    topic: 'Dor nas costas leve',
    category: 'Dor e febre',
    symptoms: ['Peso lombar', 'Desconforto ao se mover', 'Rigidez leve'],
    medications: [
      {
        name: 'Ibuprofeno',
        dosage: '400 mg',
        frequency: 'A cada 8 horas',
        presentation: 'Comprimido'
      },
      {
        name: 'Dipirona',
        dosage: '500 mg a 1 g',
        frequency: 'A cada 6 horas',
        presentation: 'Comprimido, gotas ou solucao'
      }
    ],
    notes: [
      'Orientar postura, descanso curto e evitar carregar peso por algumas horas.',
      'Calor local pode complementar o alivio em dor muscular simples.'
    ],
    expertInsight: 'Itamar costuma separar dor por esforco de dor que irradia para a perna, porque a conduta muda bastante.',
    warning: 'Encaminhar se a dor irradiar, houver dormencia, perda de forca, queda recente ou dor muito intensa.'
  },
  {
    id: 'dor-de-ouvido-leve',
    topic: 'Dor de ouvido leve',
    category: 'Dor e febre',
    symptoms: ['Desconforto no ouvido', 'Sensibilidade local', 'Dor leve ao toque'],
    medications: [
      {
        name: 'Paracetamol',
        dosage: '500 mg a 750 mg',
        frequency: 'A cada 6 ou 8 horas',
        presentation: 'Comprimido ou gotas'
      },
      {
        name: 'Ibuprofeno',
        dosage: '400 mg',
        frequency: 'A cada 8 horas',
        presentation: 'Comprimido'
      }
    ],
    notes: [
      'Evitar introduzir objetos ou gotas sem avaliar o contexto.',
      'Observar febre, secrecao e piora da dor durante a noite.'
    ],
    expertInsight: 'Itamar costuma ser conservador com queixa de ouvido e reforca avaliacao medica se o quadro nao melhora rapido.',
    warning: 'Encaminhar se houver secrecao, febre alta, perda auditiva, tontura ou dor intensa.'
  },
  {
    id: 'pressao-nos-seios-da-face',
    topic: 'Pressao nos seios da face',
    category: 'Respiratorio',
    symptoms: ['Peso no rosto', 'Nariz entupido', 'Dor de cabeca frontal'],
    medications: [
      {
        name: 'Soro fisiologico nasal',
        dosage: 'Lavagem nasal conforme necessidade',
        frequency: 'Varias vezes ao dia',
        presentation: 'Spray ou ampola'
      },
      {
        name: 'Paracetamol',
        dosage: '500 mg a 750 mg',
        frequency: 'A cada 6 ou 8 horas',
        presentation: 'Comprimido ou gotas'
      }
    ],
    notes: [
      'Hidratacao e lavagem nasal frequente ajudam bastante no alivio.',
      'Observar cor da secrecao e duracao do quadro.'
    ],
    expertInsight: 'Itamar costuma orientar primeiro medidas de desobstrucao antes de pensar em combinacoes mais pesadas.',
    warning: 'Encaminhar se houver dor facial forte, febre persistente, inchaco no rosto ou sintomas prolongados.'
  },
  {
    id: 'picada-de-inseto',
    topic: 'Picada de inseto',
    category: 'Alergias',
    symptoms: ['Coceira local', 'Vermelhidao', 'Pequeno inchaco'],
    medications: [
      {
        name: 'Loratadina',
        dosage: '10 mg',
        frequency: '1 vez ao dia',
        presentation: 'Comprimido ou xarope'
      },
      {
        name: 'Cetirizina',
        dosage: '10 mg',
        frequency: '1 vez ao dia',
        presentation: 'Comprimido ou gotas'
      }
    ],
    notes: [
      'Compressa fria local pode ajudar com coceira e inchaco.',
      'Evitar cocar para nao piorar a irritacao.'
    ],
    expertInsight: 'Itamar sempre pergunta se a reacao ficou local ou se ja comecou a espalhar, porque isso muda a urgencia.',
    warning: 'Encaminhar imediatamente se houver falta de ar, inchaco de labios, tontura ou piora rapida.'
  },
  {
    id: 'virose-intestinal-leve',
    topic: 'Virose intestinal leve',
    category: 'Gastrointestinal',
    symptoms: ['Nausea', 'Evacuacoes amolecidas', 'Fraqueza', 'Desconforto abdominal'],
    medications: [
      {
        name: 'Sais de reidratacao oral',
        dosage: 'Conforme preparo da embalagem',
        frequency: 'Ao longo do dia',
        presentation: 'Envelope para solucao oral'
      },
      {
        name: 'Dimenidrinato',
        dosage: '50 mg',
        frequency: 'A cada 6 ou 8 horas',
        presentation: 'Comprimido'
      }
    ],
    notes: [
      'Priorizar hidratacao e alimentacao leve em pequenas porcoes.',
      'Observar se o quadro evolui para vomitos persistentes ou febre alta.'
    ],
    expertInsight: 'No atendimento familiar, Itamar valoriza muito orientar paciencia com a reidratacao fracionada, porque isso evita piora do quadro.',
    warning: 'Encaminhar se houver desidratacao, sangue nas fezes, febre alta, dor intensa ou vomitos frequentes.'
  },
  {
    id: 'estufamento-e-gases',
    topic: 'Estufamento e gases',
    category: 'Gastrointestinal',
    symptoms: ['Barriga estufada', 'Desconforto apos refeicao', 'Arrotos ou gases'],
    medications: [
      {
        name: 'Antiacido',
        dosage: 'Conforme apresentacao',
        frequency: 'Apos refeicoes ou quando necessario',
        presentation: 'Suspensao ou mastigavel'
      },
      {
        name: 'Chas digestivos ou agua morna',
        dosage: 'Pequenas porcoes',
        frequency: 'Ao longo do dia',
        presentation: 'Liquido'
      }
    ],
    notes: [
      'Investigar relacao com alimentos gordurosos, refrigerante ou refeicao muito rapida.',
      'Comer devagar ajuda bastante em quadros leves.'
    ],
    expertInsight: 'Itamar costuma observar que muitas queixas de gases melhoram mais com ajuste de rotina do que com excesso de remedios.',
    warning: 'Encaminhar se houver dor intensa, vomitos, barriga muito dura ou sintomas repetitivos sem melhora.'
  }
];
