
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
from com_vitalai_aimp_domain.model.UserCommandMessage import UserCommandMessage


class HaleyIntentCommand(UserCommandMessage):
    _allowed_properties = [
        {'uri': 'http://vital.ai/ontology/haley#hasCommandChildEndDateTime', 'prop_class': DateTimeProperty}, 
        {'uri': 'http://vital.ai/ontology/haley#hasCommandChildReceivedDateTime', 'prop_class': DateTimeProperty}, 
        {'uri': 'http://vital.ai/ontology/haley#hasCommandChildSentDateTime', 'prop_class': DateTimeProperty}, 
        {'uri': 'http://vital.ai/ontology/haley#hasCommandProcessorEndDateTime', 'prop_class': DateTimeProperty}, 
        {'uri': 'http://vital.ai/ontology/haley#hasCommandProcessorReceivedDateTime', 'prop_class': DateTimeProperty}, 
        {'uri': 'http://vital.ai/ontology/haley#hasCommandProcessorSentDateTime', 'prop_class': DateTimeProperty}, 
        {'uri': 'http://vital.ai/ontology/haley#hasCommandReceivedDateTime', 'prop_class': DateTimeProperty}, 
        {'uri': 'http://vital.ai/ontology/haley#hasCommandSentDateTime', 'prop_class': DateTimeProperty}, 
        {'uri': 'http://vital.ai/ontology/haley#hasCommandStartDateTime', 'prop_class': DateTimeProperty}, 
        {'uri': 'http://vital.ai/ontology/haley#hasProcessorCommandConsumerID', 'prop_class': StringProperty}, 
        {'uri': 'http://vital.ai/ontology/haley#hasProcessorCommandConsumerPartition', 'prop_class': StringProperty}, 
        {'uri': 'http://vital.ai/ontology/haley#hasProcessorCommandConsumerPartitionAssignmentList', 'prop_class': StringProperty}, 
        {'uri': 'http://vital.ai/ontology/haley#hasProcessorCommandEndDateTime', 'prop_class': DateTimeProperty}, 
        {'uri': 'http://vital.ai/ontology/haley#hasProcessorCommandReceivedDateTime', 'prop_class': DateTimeProperty}, 
        {'uri': 'http://vital.ai/ontology/haley#hasProcessorCommandSentDateTime', 'prop_class': DateTimeProperty}, 
        {'uri': 'http://vital.ai/ontology/vital-aimp#hasIntent', 'prop_class': StringProperty}, 
        {'uri': 'http://vital.ai/ontology/vital-aimp#hasPropertyValue', 'prop_class': StringProperty}, 
    ]

    @classmethod
    def get_allowed_properties(cls):
        return super().get_allowed_properties() + HaleyIntentCommand._allowed_properties

    @classmethod
    def get_class_uri(cls) -> str:
        return 'http://vital.ai/ontology/haley#HaleyIntentCommand'

