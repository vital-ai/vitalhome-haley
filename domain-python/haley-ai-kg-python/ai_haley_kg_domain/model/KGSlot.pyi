
import datetime
from ai_haley_kg_domain.model.KGNode import KGNode


class KGSlot(KGNode):
        frameGraphURI: str
        kGBeliefModeType: str
        kGExpressionType: str
        kGSlotReferenceURI: str
        kGSlotType: str
        slotSequence: int

