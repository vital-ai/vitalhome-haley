
from vital_ai_vitalsigns.model.properties.BooleanProperty import BooleanProperty
from vital_ai_vitalsigns.model.properties.DateTimeProperty import DateTimeProperty
from vital_ai_vitalsigns.model.properties.DoubleProperty import DoubleProperty
from vital_ai_vitalsigns.model.properties.FloatProperty import FloatProperty
from vital_ai_vitalsigns.model.properties.GeoLocationProperty import GeoLocationProperty
from vital_ai_vitalsigns.model.properties.IntegerProperty import IntegerProperty
from vital_ai_vitalsigns.model.properties.LongProperty import LongProperty
from vital_ai_vitalsigns.model.properties.OtherProperty import OtherProperty
from vital_ai_vitalsigns.model.properties.StringProperty import StringProperty
from vital_ai_vitalsigns.model.properties.TruthProperty import TruthProperty
from vital_ai_vitalsigns.model.properties.URIProperty import URIProperty
from com_vitalai_haleyai_question_domain.model.HaleyQueryGroup import HaleyQueryGroup


class HaleyQueryORGroup(HaleyQueryGroup):
    _allowed_properties = [
    ]

    @classmethod
    def get_allowed_properties(cls):
        return super().get_allowed_properties() + HaleyQueryORGroup._allowed_properties

    @classmethod
    def get_class_uri(cls) -> str:
        return 'http://vital.ai/ontology/haley-ai-question#HaleyQueryORGroup'

