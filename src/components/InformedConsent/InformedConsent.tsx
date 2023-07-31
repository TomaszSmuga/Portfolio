import {
  ConsentWrapper,
  ConsentDiv,
  StyledCheckbox,
} from "./InformedConsent.styled";

interface ConsentProps {
  label?: string;
  onChange: (value: boolean) => void;
  onDecline: (value: boolean) => void;
  value: boolean | undefined;
  label2: string;
  value2: boolean | undefined;
}

export const Consent: React.FC<ConsentProps> = ({
  onChange,
  value,
  label,
  label2,
  onDecline,
  value2,
}) => {
  return (
    <>
      <ConsentWrapper>
        <h1>Świadoma zgoda</h1>
        <ConsentDiv>
          <p>
            Nazywam się Tomasz Smuga, chciałem serdecznie zaprosić Państwa do
            udziału w badaniu, które jest częścią mojej pracy magisterskiej.
            Proszę o uważne zapoznanie się z opisem realizowanego projektu
            naukowego i wyrażenie zgody na udział. Celem badania jest określenie
            wpływu wieku na funkcjonowanie pamięci wzrokowo-przestrzennej. W
            badaniu zostanie Pan/Pani poproszona/y o uzupełnienie ankiety
            socjodemograficznej, kwestionariusza zagrożenia stereotypem,
            wybranych pozycji z kwestionariusza Collective Self-Esteem Scale
            zaadaptowanych do odzwierciedlenia badanej grupy oraz wypełnienie
            Delayed Match-to-Sample task (DMTS) do którego instrukcję zobacza
            Państwo w następnych krokach. Maksymalny czas całego badania wynosi
            20 minut. Uczestnictwo jest dobrowolne, a odmowa nie wiąże się z
            żadnymi konsekwencjami. Również po wyrażeniu zgody, w trakcie
            trwania badania, można wycofać się bez podawania przyczyny. Istnieje
            też możliwość wycofania zgody na przetwarzanie uzyskanych danych po
            zakończeniu udziału. Uzyskane wyniki są poufne, to znaczy że
            indywidualne dane uzyskane od uczestnika nie będą rozpowszechniane w
            sposób umożliwiający identyfikację osoby, a jedynie przetwarzane w
            celu opracowania naukowego. W przypadku pytań lub wątpliwości, na
            każdym etapie badania, a także po jego zakończeniu, proszę
            kontaktować się z osobą odpowiedzialną za projekt. Osobie tej można
            również zgłosić chęć zapoznania się ze zbiorczymi wynikami projektu.
            Administratorem Pana/Pani danych osobowych będzie SWPS Uniwersytet
            Humanistycznospołeczny z siedzibą przy ul. Chodakowska 19/31 w
            Warszawie (03-815). Przetwarzanie podanych danych jest niezbędne do
            przeprowadzenia tego projektu badawczego, na podstawie Pana/Pani
            zgody wyrażonej poprzez wypełnienie zgłoszenia udziału w
            realizowanym projekcie (art. 6 ust. 1 lit. a RODO). Zbierane dane są
            proporcjonalne do wyznaczonego celu, nie naruszają istoty prawa do
            ochrony danych i przewidują odpowiednie, konkretne środki ochrony
            Pana/Pani podstawowych praw i interesów. Po zakończeniu procesu
            zbierania danych badawczych Pana/Pani dane osobowe zostaną w pełni
            zanonimizowane i przechowane przez okres 48 miesięcy. Odbiorcami
            Pana/Pani danych zawartych w korespondencji e-mail będzie dostawca
            hostingu poczty elektronicznej (tsmuga@st.swps.edu.pl). Prawa
            uczestnika wynikające z przetwarzania danych: prawo do dostępu do
            treści swoich danych oraz ich poprawiania, usunięcia, ograniczenie
            przetwarzania, prawo do przenoszenia danych za wniesienia sprzeciwu.
            Uczestnikowi przysługuje prawo do cofnięcia zgody w dowolnym
            momencie bez wpływu na zgodność z prawem przetwarzania. Aby wycofać
            zgodę należy wysłać wiadomość na adres tsmuga@st.swps.edu.pl.
            Uczestnik posiada również prawo do wniesienia skargi do organu
            nadzorczego, jeśli uzna, że przetwarzanie jego danych osobowych
            narusza przepisy RODO lub inne przepisy określające sposób
            przetwarzania danych osobowych (Inspektor Danych Uniwersytetu SWPS:
            iod@swps.edu.pl). *Podstawa prawna: Rozporządzenie Parlamentu
            Europejskiego i Rady UE 2016/679 z 27 kwietnia 2016 r. w sprawie
            ochrony osób fizycznych w związku z przetwarzaniem danych osobowych
            i w sprawie swobodnego przepływu takich danych oraz uchylenia
            dyrektywy 95/46/WE (ogólne rozporządzenie o ochronie danych).
            <br />
            <br />
            <strong>Zgoda na udział w badaniu</strong>
            <br />
            Oświadczam, że zaznajomiłem/łam się z informacją dla osoby badanej.
            Z własnej i nieprzymuszonej woli zgadzam się uczestniczyć w tym
            badaniu. Wyrażam wyraźną i dobrowolną zgodę na przetwarzanie moich
            danych osobowych, w tym danych szczególnej kategorii, przez SWPS
            Uniwersytet Humanistycznospołeczny z siedzibą przy ul. Chodakowska
            19/31 w Warszawie (03-815) w celu realizacji mojego uczestnictwa w
            badaniu i dla potrzeb realizacji jego celów.
          </p>
          <StyledCheckbox
            size="massive"
            label={label}
            checked={value}
            onChange={() => onChange(!value)}
          />
          <StyledCheckbox
            label={label2}
            onChange={() => onDecline(!value)}
            checked={value2}
          />
        </ConsentDiv>
      </ConsentWrapper>
    </>
  );
};

export const Instruction: React.FC = () => {
  return (
    <>
      <ConsentWrapper>
        <h1>Instrukacja do badania</h1>
        <ConsentDiv>
          <ol>
            <li>
              Po nacisnięciu przycisku <strong>"Dalej"</strong> zobaczą Państwo
              odliczanie.
            </li>
            <li>
              Gdy licznik dotrze do <strong>0</strong> przez wyświetli się układ
              16 kwadratów.
            </li>
            <img src="http://ct-card.socialmind-dk.pl/wp-content/uploads/2023/06/8.jpg" />
            <li>
              Państwa zadaniem jest{" "}
              <strong>zapamiętać ułożenie tych kwadratów.</strong>
            </li>
            <li>
              Następnie wyświetlony zostanie{" "}
              <strong>
                czarny ekran.
                <br></br>
                Proszę starać się nie odrywać od niego wzroku
              </strong>{" "}
            </li>

            <li>
              Będą mieli państwo do wyboru dwa układy:{" "}
              <strong>
                <ul>
                  <li>
                    Jeden, wyświetlany wcześniej - Może być obrócony o losowy
                    kąt względem oryginału
                  </li>
                  <li>Drugi nowy</li>
                </ul>
              </strong>
              <div>
                <img
                  style={{ transform: `rotate(90deg)` }}
                  src="http://ct-card.socialmind-dk.pl/wp-content/uploads/2023/06/8.jpg"
                />
                <img src="http://ct-card.socialmind-dk.pl/wp-content/uploads/2023/06/7.jpg" />
              </div>
            </li>
            <li>
              <strong>
                Państwa zadaniem jest wybrać ten układ, który widzieli Państwo
                wcześniej
              </strong>
            </li>
            <li>
              Ostatni krok to naciśnięcie przycisku <strong>"Dalej"</strong>, po
              którym sekwencja się <strong>powtórzy</strong> - badanie składa
              się z 50 prób.
            </li>
            <li>
              Po ostatnim powtórzeniu zadania zamiast przycisku{" "}
              <strong>"Dalej"</strong> wyświetli się <strong>"Wyślij"</strong>.
              Proszę go wcisnąć tym samym kończąc badanie.
            </li>
          </ol>
        </ConsentDiv>
      </ConsentWrapper>
    </>
  );
};
